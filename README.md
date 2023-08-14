# angular_learn
Create Angular Project: 
ng new AngularApp

Create User Form Component:
ng generate component user-form

Create User Entity:

export class User {
  name: string;
  lastName: string;
  birthDate: Date;
  // Add other properties as needed
}
In the user-form component, implement the logic to handle the form submission using Angular's HttpClient. Send a POST request to your .NET Core Web API's endpoint.
Configure DbContext:
In the DbContext class (e.g., AppDbContext), define a DbSet<User> property to represent the Users table.
Migrate User Entity:
dotnet ef migrations add InitialCreate
dotnet ef database update

Create a TestController with an HttpPost method named SaveUser that receives a User object.

Save User Entity to Database:
In the SaveUser method, use the DbContext to add the received User object and save changes to the database.

Q1)

Difference between AngularJS and Angular:


Architecture:

AngularJS: AngularJS is an older JavaScript framework (often referred to as Angular 1) that follows the Model-View-Controller (MVC) architecture.
Angular: Angular (often referred to as Angular 2+ or simply Angular) is a complete rewrite of AngularJS and follows a component-based architecture. It uses a hierarchical tree of components for building web applications.
Language:

AngularJS: AngularJS uses JavaScript.
Angular: Angular uses TypeScript, which is a superset of JavaScript that provides static typing, interfaces, decorators, and other advanced features.
Data Binding:

AngularJS: AngularJS offers two-way data binding, where changes in the view are automatically reflected in the model and vice versa.
Angular: Angular provides uni-directional data flow by default, and two-way data binding is achieved through property binding and event binding separately.
Dependency Injection:

AngularJS: AngularJS has a built-in dependency injection system, but it's less robust and flexible compared to Angular.
Angular: Angular has a powerful and advanced dependency injection system that enables better modularity and testing.
Performance:

AngularJS: AngularJS can have performance issues with larger applications due to its architecture and digest cycle.
Angular: Angular has been designed with performance optimizations in mind, and it uses a more efficient change detection mechanism.

01-B)

@Input(): This decorator is used to pass data from a parent component to a child component. It allows a parent component to bind a value to a property of a child component. The child component can then use this property in its template or logic.

@Output(): This decorator is used to emit events from a child component to a parent component. It allows a child component to define custom events and emit them with data. The parent component can listen to these events and react accordingly.


Q3)
ADVANTAGES:
Improved Performance: The primary benefit of using the OnPush strategy is improved performance. With this strategy, Angular checks for changes only when input properties of a component change or when events occur within the component. This can significantly reduce the number of change detection cycles and improve the rendering performance of your application.

Reduced Change Detection Cycles: Since the change detection is triggered only when specific inputs change, unnecessary change detection cycles are avoided. This can lead to faster rendering and improved overall responsiveness of your application.

DISADVANTAGES:

Complexity: The OnPush strategy requires a more thoughtful approach to designing components and managing state. It may require restructuring your components and using more advanced techniques like immutability and observables.

Debugging: While OnPush can improve performance, it may also make debugging more challenging. Changes might not be detected as you expect, leading to potential confusion during development.

Limited Automatic Change Detection: With the OnPush strategy, Angular's automatic change detection won't catch changes made directly to the component's properties. Ü


