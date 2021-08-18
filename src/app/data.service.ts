import { Injectable } from '@angular/core';
import { candidates } from './data';
import { instructors } from './data';
import { vehicles } from './data';
import { notificationsForAdmin } from './data';
import { notificationsFromAdmin } from './data';
import { reminders } from './data';
import { payments } from './data';
import { exams } from './data';
import { documents } from './data';
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
  PAYMENTS = payments;
  EXAMS = exams;
  DOCUMENTS = documents;
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

  constructor() { }
}
