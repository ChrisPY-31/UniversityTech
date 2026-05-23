import { Mail, Lock, Eye, EyeOff, Camera, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProfileForm = ({ updateImage, updateProfile, updatePasswordUser }) => {
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleUpdateImage = async () => {
    if (!imageFile) return;
    setLoadingImage(true);
    try {
      await updateImage(imageFile);
      setImageFile(null);
      setImagePreview(null);
      toast.success("Foto actualizada correctamente");
    } catch {
      toast.error("Error al actualizar la foto");
    } finally {
      setLoadingImage(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!name.trim() || !lastName.trim() || !email.trim()) {
      toast.error("Nombre, apellido y correo son obligatorios");
      return;
    }
    setLoadingProfile(true);
    try {
      await updateProfile({ name, lastName, email });
      toast.success("Perfil actualizado correctamente");
    } catch {
      toast.error("Error al actualizar el perfil");
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!password.trim()) return;
    setLoadingPassword(true);
    try {
      await updatePasswordUser(password);
      setPassword("");
      toast.success("Contraseña actualizada correctamente");
    } catch {
      toast.error("Error al actualizar la contraseña");
    } finally {
      setLoadingPassword(false);
    }
  };

  const currentAvatar =
    imagePreview ||
    user?.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent((user?.name || "U") + " " + (user?.lastName || ""))}&background=1e3a5f&color=fff&size=80`;

  return (
    <div className="bg-white rounded-3xl p-12 shadow-sm">
      <h2 className="text-5xl font-bold text-[#082b86] mb-4">
        Configuración de Perfil
      </h2>
      <p className="text-slate-500 text-lg mb-10">
        Actualiza tu información personal y preferencias de seguridad.
      </p>

      {/* Foto de perfil */}
      <div className="mb-8">
        <label className="block mb-3 font-bold uppercase text-cyan-800 text-sm">
          Foto de perfil
        </label>
        <div className="flex items-center gap-6">
          <div className="relative group w-28 h-28 shrink-0">
            <img
              src={currentAvatar}
              alt="preview"
              className="w-28 h-28 rounded-2xl object-cover"
            />
            <button
              onClick={() => fileRef.current.click()}
              className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <Camera size={22} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <button
              onClick={() => fileRef.current.click()}
              className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 transition-all px-5 h-10 rounded-xl font-semibold text-sm w-fit"
            >
              <Camera size={16} />
              Seleccionar imagen
            </button>
            {imageFile && (
              <button
                onClick={handleUpdateImage}
                disabled={loadingImage}
                className="bg-[#0038ff] hover:bg-[#002ecc] transition-all text-white px-5 h-10 rounded-xl font-semibold text-sm disabled:opacity-50 w-fit"
              >
                {loadingImage ? "Guardando..." : "Guardar imagen"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Nombre y Apellido */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block mb-3 font-bold uppercase text-cyan-800 text-sm">Nombre</label>
          <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 h-14 border border-slate-200 focus-within:border-blue-400 transition-colors">
            <User size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="bg-transparent w-full outline-none text-slate-800"
            />
          </div>
        </div>
        <div>
          <label className="block mb-3 font-bold uppercase text-cyan-800 text-sm">Apellido</label>
          <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 h-14 border border-slate-200 focus-within:border-blue-400 transition-colors">
            <User size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Tu apellido"
              className="bg-transparent w-full outline-none text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Correo */}
      <div className="mb-8">
        <label className="block mb-3 font-bold uppercase text-cyan-800 text-sm">Correo Electrónico</label>
        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 h-14 border border-slate-200 focus-within:border-blue-400 transition-colors">
          <Mail size={20} className="text-slate-400 shrink-0" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="bg-transparent w-full outline-none text-slate-800"
          />
        </div>
      </div>

      {/* Botones guardar perfil */}
      <div className="flex items-center gap-6 mb-10">
        <button
          onClick={handleSaveProfile}
          disabled={loadingProfile}
          className="bg-[#0038ff] hover:bg-[#002ecc] transition-all text-white font-bold px-10 h-14 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingProfile ? "Guardando..." : "Guardar cambios"}
        </button>
        <button
          type="button"
          onClick={() => {
            setName(user?.name || "");
            setLastName(user?.lastName || "");
            setEmail(user?.email || "");
          }}
          className="font-bold text-[#082b86] hover:underline"
        >
          Cancelar cambios
        </button>
      </div>

      {/* Contraseña */}
      <div className="border-t border-slate-200 pt-8">
        <label className="block mb-3 font-bold uppercase text-cyan-800 text-sm">
          Nueva Contraseña
        </label>
        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 h-14 border border-slate-200 focus-within:border-blue-400 transition-colors mb-4">
          <Lock size={20} className="text-slate-400 shrink-0" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escribe tu nueva contraseña"
            className="bg-transparent w-full outline-none text-slate-800"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword
              ? <EyeOff size={20} className="text-slate-400" />
              : <Eye size={20} className="text-slate-400" />}
          </button>
        </div>
        <button
          onClick={handleUpdatePassword}
          disabled={loadingPassword || !password.trim()}
          className="bg-[#0038ff] hover:bg-[#002ecc] transition-all text-white font-bold px-10 h-14 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingPassword ? "Actualizando..." : "Actualizar contraseña"}
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
