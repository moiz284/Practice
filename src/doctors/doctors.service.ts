import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DoctorsService {
  private doctors = [
    { id: 1, name: 'Dr. Moiz Akbar', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Ayesha Siddiqui', specialty: 'Dermatologist' },
    { id: 3, name: 'Dr. Ahmed Raza', specialty: 'Neurologist' },
  ];

  findAll() {
    return this.doctors;
  }

  findById(id: number) {
    const doctor = this.doctors.find((doc) => doc.id === id);
    if (!doctor) throw new NotFoundException(`Doctor with ID ${id} not found`);
    return doctor;
  }
}
