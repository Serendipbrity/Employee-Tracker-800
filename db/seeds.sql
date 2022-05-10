INSERT INTO employees (first_name, last_name, title, department, salary, manager)
VALUES
  ('Ronald', 'Firbank', 'Sales Lead', 'Sales', 100000, null),
  ('Virginia', 'Woolf', 'Salesperson', 'Sales', 80000, 'John Doe'),
  ('Piers', 'Gaveston', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez'),
  ('Charles', 'LeRoi', 'Accountant', 'Finance', 125000, 'Keri Walsh'),
  ('Katherine', 'Mansfield', 'Account Manager', 'Finance', 160000, null),
  ('Dora', 'Carrington', 'Lawyer', 'Legal', 190000, 'Sarah Hersh'),
  ('Edward', 'Bellamy', 'Legal Team Lead', 'Legal', 250000, null),
  ('Montague', 'Summers', 'Lead Engineer', 'Engineering', 150000, null);

INSERT INTO roles (title, department, salary)
VALUES
  ('Salesperson', 'Sales', 80000),
  ('Sales Lead', 'Sales', 100000),
  ('Software Engineer', 'Engineering',120000),
  ('Lead Engineer', 'Engineering',150000),
  ('Accountant', 'Finance', 125000),
  ('Account Manager', 'Finance', 160000),
  ('Lawyer', 'Legal', 190000),
  ('Legal Team Lead', 'Legal', 250000);

INSERT INTO department (names)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');


