import { BadgeCheck } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="bg-[#eef3f8] rounded-2xl p-7">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
          <BadgeCheck />
        </div>

        <div>
          <h4 className="text-cyan-800 font-bold text-sm">
            ESTUDIANTE PRO
          </h4>

          <h3 className="font-bold text-2xl">
            Nexus Ultra Member
          </h3>
        </div>
      </div>

      <p className="text-slate-600 leading-8">
        Gestiona tu identidad digital en la plataforma líder de educación
        tecnológica. Mantén tus datos actualizados para recibir
        certificaciones válidas.
      </p>
    </div>
  );
};

export default ProfileCard;