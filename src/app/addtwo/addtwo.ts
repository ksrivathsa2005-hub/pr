import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtwo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addtwo.html',
  styleUrls: ['./addtwo.css'],
})
export class Addtwo {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  error = '';

  private parseInputs(): { a: number; b: number } | null {
    this.error = '';
    const a = parseFloat(this.num1 as unknown as string);
    const b = parseFloat(this.num2 as unknown as string);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      this.error = 'Please enter valid numbers in both fields.';
      this.result = null;
      return null;
    }
    return { a, b };
  }

  add(): void {
    const v = this.parseInputs();
    if (!v) return;
    this.result = v.a + v.b;
  }

  subtract(): void {
    const v = this.parseInputs();
    if (!v) return;
    this.result = v.a - v.b;
  }

  multiply(): void {
    const v = this.parseInputs();
    if (!v) return;
    this.result = v.a * v.b;
  }

  divide(): void {
    const v = this.parseInputs();
    if (!v) return;
    if (v.b === 0) {
      this.error = 'Cannot divide by zero.';
      this.result = null;
      return;
    }
    this.result = v.a / v.b;
  }

  clear(): void {
    this.num1 = '';
    this.num2 = '';
    this.result = null;
    this.error = '';
  }
}
