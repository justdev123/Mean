import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../Services/auth-data.service';
import { Injectable, Component } from '@angular/core';


export class LoggedUserGuard implements CanActivate{


    canActivate(){
        console.log('Guarded');
        if (localStorage.getItem('token') != null) {
            return true;
        } else {
            return false;
        }
    }
}