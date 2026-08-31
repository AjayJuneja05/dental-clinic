import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'doctors.json');

function readDoctors() {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    return [];
  }
}

function writeDoctors(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// GET /api/doctors - Fetch all specialists
export async function GET() {
  const doctors = readDoctors();
  return NextResponse.json({ success: true, data: doctors });
}

// POST /api/doctors - Add a new specialist from admin panel
export async function POST(request) {
  try {
    const newDoctor = await request.json();
    const doctors = readDoctors();
    
    if (!newDoctor.id) {
      newDoctor.id = `doc-${Date.now()}`;
    }
    
    doctors.push(newDoctor);
    writeDoctors(doctors);
    
    return NextResponse.json({ success: true, data: newDoctor, message: 'Specialist added successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT /api/doctors - Update existing specialist & image URL from admin panel
export async function PUT(request) {
  try {
    const updatedData = await request.json();
    const doctors = readDoctors();
    
    const index = doctors.findIndex((d) => d.id === updatedData.id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Doctor not found' }, { status: 404 });
    }
    
    doctors[index] = { ...doctors[index], ...updatedData };
    writeDoctors(doctors);
    
    return NextResponse.json({ success: true, data: doctors[index], message: 'Specialist updated successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/doctors - Remove specialist from admin panel
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }
    
    let doctors = readDoctors();
    doctors = doctors.filter((d) => d.id !== id);
    writeDoctors(doctors);
    
    return NextResponse.json({ success: true, message: 'Specialist deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
