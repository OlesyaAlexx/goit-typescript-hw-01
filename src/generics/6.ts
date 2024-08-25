type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

//Для перевірки:
const exampleParams: Params = {
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
};

console.log(exampleParams);

export {};
