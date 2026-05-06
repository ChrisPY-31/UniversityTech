import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import imagenTec from "../../assets/imagenTec.jpg";
import { IoRefreshOutline } from "react-icons/io5";

const ManagerNewAccount = () => {

  //contraseñas
  const generatePassword = () => {
    const length = Math.floor(Math.random() * 5) + 4;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
  };

  // generar username de instructor
const generateUsername = (name, lastname) => {
  if (!name || !lastname) return "";

  const clean = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const n = clean(name);
  const l = clean(lastname);

  if (!n || !l) return "";

  const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let base = "";

  const type = rand(1, 3);

  if (type === 1) {
    base = n.slice(0, rand(2, 4)) + l.slice(0, rand(2, 4));
  } else if (type === 2) {
    base = l.slice(0, rand(3, 5));
  } else {
    base = n.charAt(0) + l.slice(0, rand(3, 5));
  }

  const numbers = rand(10, 99);

  return (base + numbers).slice(0, 8);
};

  //validaciones
  const registerSchema = Yup.object().shape({
    username: Yup.string().required("El usuario es requerido"),
    name: Yup.string()
      .min(2, "Mínimo 2 caracteres")
      .required("El nombre es requerido"),
    lastname: Yup.string()
      .min(2, "Mínimo 2 caracteres")
      .required("El apellido es requerido"),
    email: Yup.string()
      .email("Correo inválido")
      .required("El correo es requerido"),
    password: Yup.string().required("Genera una contraseña"),
  });

  const onSubmitHandler = (values) => {
    const userObject = {
      user: {
        username: values.username,
        password: values.password,
        email: values.email,
        role: values.role,
      },
      person: {
        nombre: values.name,
        apellido: values.lastname,
      },
    };

    console.log("Datos", userObject);
  };

  return (
    <div className=" flex items-center justify-center p-8 text-white">
      <div className="flex w-full max-w-[1200px] gap-40 items-center">

        <div className="w-5/12 space-y-8">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Registro de <br />
              <span className="text-cyan-400">usuarios</span>
            </h1>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0B0F19] shadow-2xl">
            <img
              src={imagenTec}
              alt="admin"
              className="w-full h-[320px] object-cover opacity-70"
            />
          </div>
        </div>

        <div className="w-6/12 max-w-[520px]">
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl p-7 shadow-md transition-all duration-300 ease-out
            hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]hover:border-cyan-400/40">
            <h2 className="text-2xl font-semibold">Comenzar registro</h2>
            <p className="text-gray-400 text-sm mb-6">
              Completar datos para crear un nuevo perfil.
            </p>

            <Formik
              initialValues={{
                username: "",
                name: "",
                lastname: "",
                email: "",
                password: generatePassword(),
                role: "INSTRUCTOR",
              }}
              validationSchema={registerSchema}
              onSubmit={onSubmitHandler}
            >
              {({ values, setFieldValue, errors, touched }) => (
                <Form className="space-y-5">

                  <div className="flex bg-[#060B13] p-1 rounded-xl ">
                    {["ESTUDIANTE", "INSTRUCTOR"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setFieldValue("role", r)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                          values.role === r
                            ? "bg-cyan-400 text-black"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {r === "INSTRUCTOR" ? "Instructor" : "Estudiante"}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[14px] text-gray-400">
                        Nombre:
                      </label>
                      <Field
                        name="name"
                        placeholder="Nombre(s)"
                        className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400"
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-[14px] text-gray-400">
                        Apellidos:
                      </label>
                      <Field
                        name="lastname"
                        placeholder="Ej. Rivera Lopez"
                        className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400"
                      />
                      {errors.lastname && touched.lastname && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.lastname}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[14px] text-gray-400">
                      Usuario:
                    </label>

                    <div className="flex items-center gap-2 mt-1">
                      <Field
                        name="username"
                        placeholder="Usuario"
                        readOnly={values.role === "INSTRUCTOR"}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400"
                      />

                      {values.role === "INSTRUCTOR" && (
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue(
                              "username",
                              generateUsername(values.name, values.lastname)
                            )
                          }
                          className="text-xs text-cyan-400 border-b border-cyan-400 hover:text-cyan-300 hover:border-cyan-300 transition cursor-pointer"
                        >
                          Generar
                        </button>
                      )}
                    </div>

                    {errors.username && touched.username && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.username}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[14px] text-gray-400 tracking-wide">
                      Correo:
                    </label>
                    <Field
                      name="email"
                      type="email"
                      autoComplete="off"
                      placeholder="correo@dominio.com"
                      className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:bg-white/5"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[14px] text-gray-400 tracking-wide">
                      Contraseña:
                    </label>

                    <div className="flex items-center bg-[#060B13] border border-white/10 rounded-lg px-3 py-2 mt-1">
                      <IoRefreshOutline
                        className="text-cyan-400 cursor-pointer hover:rotate-180 transition"
                        onClick={() =>
                          setFieldValue("password", generatePassword())
                        } />

                      <Field
                        name="password" readOnly
                        className="bg-transparent w-full px-3 text-cyan-400 outline-none font-mono tracking-widest text-sm" />
                    </div>

                    {errors.password && touched.password && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-[#060B13] font-bold text-sm tracking-wide
                      shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer" >
                    Crear cuenta
                  </button>

                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerNewAccount;