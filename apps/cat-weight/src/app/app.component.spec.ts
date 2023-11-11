import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

it('should show the child routes', async () => {
  @Component({
    selector: 'app-child',
    standalone: true,
    template: 'Child',
  })
  class ChildComponent {}

  const mockRoutes = [{ path: '', component: ChildComponent }];

  await render(AppComponent, {
    imports: [RouterTestingModule.withRoutes(mockRoutes)],
  });

  expect(screen.getByText('Child'));
});
