import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import logoNexusTechP from "../../assets/LogoNexusTechP.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <FieldGroup
        className="w-[420px] bg-gray-900 border border-gray-800 rounded-2xl p-7
    shadow-md transition-all duration-300 ease-out
     hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
    hover:border-cyan-400/40"
      >
        <div className="flex flex-col items-center mb-6">
          <img src={logoNexusTechP} alt="Logo" className="w-24 py-2 " />

          <h1 className="text-white font-bold text-2xl mt-3">Nexus Tech</h1>
          <p className="text-gray-400 text-sm text-center mt-1">
            Aprender nunca fue tan accesible
          </p>
        </div>

        <Field className="mb-4">
          <FieldLabel htmlFor="email" className="text-[15px] text-gray-400">
            Correo electronico:
          </FieldLabel>

          <Input
            id="email"
            type="email"
            placeholder="name@nexus-tech.edu"
            className="mt-1 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-cyan-400 transition"
          />
        </Field>

        <Field className="mb-4">
          <div className="flex justify-between items-center">
            <FieldLabel
              htmlFor="password"
              className="text-[15px] text-gray-400"
            >
              Contraseña:
            </FieldLabel>

            <span className="text-sm text-cyan-400 underline cursor-pointer">
              Olvidaste tu contraseña?
            </span>
          </div>

          <Input
            id="password"
            type="password"
            placeholder="********"
            className="mt-1 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-cyan-400 transition"
          />
        </Field>

        <Field>
          <Button
            type="submit"
            className="w-full py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition cursor-pointer"
          >
            Ingresar
          </Button>
        </Field>

        <p className="text-center text-gray-500 text-sm mt-5">
          No estas registrado?{" "}
          <span className="text-cyan-400 underline cursor-pointer">
            Crear cuenta
          </span>
        </p>
      </FieldGroup>
    </div>
  );
};

export default Login;
