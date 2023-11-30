//components
import { IRegisterForm } from "..";
import { Button, Input } from "../../ui";
//hook form
import { useForm, SubmitHandler } from "react-hook-form";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegisterForm>();

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="first-name"
            label="First name"
            placeholder="John"
            errors={errors?.firstName && !isValid}
            errorMessage="This field is required"
            {...register("firstName", { required: true })}
          />

          <Input
            id="last-name"
            label="Last name"
            placeholder="Doe"
            errors={!!errors?.lastName}
            errorMessage="This field is required"
            {...register("lastName", { required: true })}
          />
        </div>
        <Input
          id="email"
          label="Email"
          placeholder="Enter your Email"
          type="email"
          errors={!!errors?.email}
          errorMessage="This field is required"
          {...register("email", { required: true })}
        />
        <div className="space-y-2 relative">
          <Input
            id="password"
            label="Password"
            placeholder=""
            type="password"
            errors={!!errors?.lastName}
            errorMessage="This field is required"
            {...register("password", { required: true })}
          />
        </div>
        <div className=" mt-10 ">
          <Button label="Register" />
        </div>
      </form>
    </div>
  );
}
