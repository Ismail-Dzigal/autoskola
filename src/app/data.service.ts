import { Injectable } from '@angular/core';
import { candidates } from './data';
import { instructors } from './data';
import { vehicles } from './data';
import { notificationsForAdmin } from './data';
import { notificationsFromAdmin } from './data';
import { reminders } from './data';
import { lectureTimes } from './data';
import { trainings } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  CANDIDATES = candidates;
  INSTRUCTORS = instructors;
  VEHICLES = vehicles;
  NOTIFICATIONSFORADMIN = notificationsForAdmin;
  NOTIFICATIONSFROMADMIN = notificationsFromAdmin;
  REMINDERS = reminders;
  LECTURETIMES = lectureTimes;
  TRAININGS = trainings;

  //CRUD CANDIDATE

  getCandidates() {
    return [...this.CANDIDATES];
  }

  getCandidate(id) {
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      const candidate = this.CANDIDATES[i];
      if(candidate.id === id){
        return candidate;
      }
    }
    return null;
  }

  setCandidate(editedCandidate){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      let candidate = this.CANDIDATES[i];
      if(candidate.id === editedCandidate.id){
        candidate = Object.assign({}, editedCandidate);
      }
    }
  }

  addPayment(candidateId, newPayment){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      let candidate = this.CANDIDATES[i];
      if(candidate.id === candidateId){
        candidate.uplate.push(newPayment);
      }
    }
  }

  addExam(candidateId, newExam){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      let candidate = this.CANDIDATES[i];
      if(candidate.id === candidateId){
        candidate.ispiti.push(newExam);
      }
    }
  }

  addDocument(candidateId, newDocument){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      let candidate = this.CANDIDATES[i];
      if(candidate.id === candidateId){
        candidate.dokumenti.push(newDocument);
      }
    }
  }

  deleteCandidate(id) {
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      const candidate = this.CANDIDATES[i];
      if(candidate.id === id){
        this.CANDIDATES.splice(i, 1);
        break;
      }
    }    
  }

   //CRUD NOTIFICATIONSFORADMIN

   getNotificationsForAdmin() {
    return [...this.NOTIFICATIONSFORADMIN];
  }

  getNotificationForAdmin(id) {
    for (let i = 0; i < this.NOTIFICATIONSFORADMIN.length; i++) {
      const notification = this.NOTIFICATIONSFORADMIN[i];
      if(notification.id === id){
        return notification;
      }
    }
    return null;
  }

  deleteNotificationForAdmin(id) {
    for (let i = 0; i < this.NOTIFICATIONSFORADMIN.length; i++) {
      const notification = this.NOTIFICATIONSFORADMIN[i];
      if(notification.id === id){
        this.NOTIFICATIONSFORADMIN.splice(i, 1);
        break;
      }
    }    
  }

  //CRUD REMINDERS

  getReminders() {
    return [...this.REMINDERS];
  }

  deleteReminder(id) {
    for (let i = 0; i < this.REMINDERS.length; i++) {
      const reminder = this.REMINDERS[i];
      if(reminder.id === id){
        this.REMINDERS.splice(i, 1);
        break;
      }
    }    
  }

   //CRUD NOTIFICATIONSFROMADMIN

   getNotificationsFromAdmin() {
    return [...this.NOTIFICATIONSFROMADMIN];
  }

  getNotificationFromAdmin(id) {
    for (let i = 0; i < this.NOTIFICATIONSFROMADMIN.length; i++) {
      const notification = this.NOTIFICATIONSFROMADMIN[i];
      if(notification.id === id){
        return notification;
      }
    }
    return null;
  }

  deleteNotificationFromAdmin(id) {
    for (let i = 0; i < this.NOTIFICATIONSFROMADMIN.length; i++) {
      const notification = this.NOTIFICATIONSFROMADMIN[i];
      if(notification.id === id){
        this.NOTIFICATIONSFROMADMIN.splice(i, 1);
        break;
      }
    }    
  }

  addNotificationFromAdmin(newNotification){
    this.NOTIFICATIONSFROMADMIN.push(newNotification);
  }

  addNotificationFromAdminInstructor(selectedRecipientId, newNotification){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      let instructor = this.INSTRUCTORS[i];
      if(instructor.id === selectedRecipientId){
        instructor.primljeneNotifikacije.push(newNotification);
      }
    }
  }

  addNotificationFromAdminCandidate(selectedRecipientId, newNotification){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      let candidate = this.CANDIDATES[i];
      if(candidate.id === selectedRecipientId){
        candidate.primljeneNotifikacije.push(newNotification);
      }
    }
  }

   //CRUD INSTRUCTOR

  getInstructors() {
    return [...this.INSTRUCTORS];
  }

  getInstructor(id) {
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      const instructor = this.INSTRUCTORS[i];
      if(instructor.id === id){
        return instructor;
      }
    }
    return null;
  }

  setInstructor(editedInstructor){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      let instructor = this.INSTRUCTORS[i];
      if(instructor.id === editedInstructor.id){
        instructor = Object.assign({}, editedInstructor);
      }
    }
  }

  setCandidateInstructorId(candidateId, instructor){
    for (let i = 0; i < this.CANDIDATES.length; i++) {
      const candidate = this.CANDIDATES[i];
      if(candidate.id === candidateId){
        candidate.instructorId = instructor.id;
        candidate.instructorImePrezime = instructor.ime + ' ' + instructor.prezime;
      }
    }
  }

  addInstructorCandidate(instructorId, newCandidate){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      let instructor = this.INSTRUCTORS[i];
      if(instructor.id === instructorId){
        instructor.kandidati.push(newCandidate);
        this.setCandidateInstructorId(+newCandidate.candidateId, instructor)
      }
    }
  }

  addSeminar(instructorId, newSeminar){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      let instructor = this.INSTRUCTORS[i];
      if(instructor.id === instructorId){
        instructor.seminari.push(newSeminar);
      }
    }
  }

  addDocumentInstructor(instructorId, newDocument){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      let instructor = this.INSTRUCTORS[i];
      if(instructor.id === instructorId){
        instructor.dokumenti.push(newDocument);
      }
    }
  }

  deleteInstructor(id) {
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      const instructor = this.INSTRUCTORS[i];
      if(instructor.id === id){
        this.INSTRUCTORS.splice(i, 1);
        break;
      }
    }    
  }

  //CRUD VEHICLE

  getVehicles() {
    return [...this.VEHICLES];
  }

  getVehicle(id) {
    for (let i = 0; i < this.VEHICLES.length; i++) {
      const vehicle = this.VEHICLES[i];
      if(vehicle.id === id){
        return vehicle;
      }
    }
    return null;
  }

  setVehicle(editedVehicle){
    for (let i = 0; i < this.VEHICLES.length; i++) {
      let vehicle = this.VEHICLES[i];
      if(vehicle.id === editedVehicle.id){
        vehicle = Object.assign({}, editedVehicle);
      }
    }
  }

  setInstructorVehicleId(instructorId, vehicle){
    for (let i = 0; i < this.INSTRUCTORS.length; i++) {
      const instructor = this.INSTRUCTORS[i];
      if(instructor.id === instructorId){
        instructor.vehicleId = vehicle.id;
        instructor.zaduzenoVozilo = vehicle.registarskaOznaka;
      }
    }
  }

  addVehicleInstructor(vehicleId, newInstruktor){
    for (let i = 0; i < this.VEHICLES.length; i++) {
      let vehicle = this.VEHICLES[i];
      if(vehicle.id === vehicleId){
        vehicle.instruktori.push(newInstruktor);
        this.setInstructorVehicleId(+newInstruktor.instructorId, vehicle)
      }
    }
  }

  addIntervencija(vehicleId, newIntervencija){
    for (let i = 0; i < this.VEHICLES.length; i++) {
      let vehicle = this.VEHICLES[i];
      if(vehicle.id === vehicleId){
        vehicle.intervencije.push(newIntervencija);
      }
    }
  }

  addDocumentVehicle(vehicleId, newDocument){
    for (let i = 0; i < this.VEHICLES.length; i++) {
      let vehicle = this.VEHICLES[i];
      if(vehicle.id === vehicleId){
        vehicle.dokumenti.push(newDocument);
      }
    }
  }

  deleteVehicle(id) {
    for (let i = 0; i < this.VEHICLES.length; i++) {
      const vehicle = this.VEHICLES[i];
      if(vehicle.id === id){
        this.VEHICLES.splice(i, 1);
        break;
      }
    }    
  }

  constructor() { }
}
