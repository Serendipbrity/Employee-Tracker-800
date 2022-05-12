
INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');

INSERT INTO roles (title, department, salary, d_id)
VALUES
  ('Salesperson', 'Sales', 80000, 4),
  ('Sales Lead', 'Sales', 100000, 4),
  ('Software Engineer', 'Engineering',120000, 1),
  ('Lead Engineer', 'Engineering',150000, 1),
  ('Accountant', 'Finance', 125000, 2),
  ('Account Manager', 'Finance', 160000, 2),
  ('Lawyer', 'Legal', 190000, 3),
  ('Legal Team Lead', 'Legal', 250000, 3);

INSERT INTO employees (first_name, last_name, title, department, salary, manager, role_id)
VALUES
  ('Ronald', 'Firbank', 'Sales Lead', 'Sales', 100000, null, 4),
  ('Virginia', 'Woolf', 'Salesperson', 'Sales', 80000, 'John Doe', 4),
  ('Piers', 'Gaveston', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez', 1),
  ('Charles', 'LeRoi', 'Accountant', 'Finance', 125000, 'Keri Walsh', 2),
  ('Katherine', 'Mansfield', 'Account Manager', 'Finance', 160000, null, 2),
  ('Dora', 'Carrington', 'Lawyer', 'Legal', 190000, 'Sarah Hersh', 3),
  ('Edward', 'Bellamy', 'Legal Team Lead', 'Legal', 250000, null, 3),
  ('Montague', 'Summers', 'Lead Engineer', 'Engineering', 150000, null, 1);
