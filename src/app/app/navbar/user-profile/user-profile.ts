import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  @Input() imageUrl: string = 'assets/default-avatar.png';
  @Input() displayName: string = 'User Name';
  @Input() handle: string = '@username';
  @Input() isPro: boolean = false;
}
