import OptionCard from '@/components/UserPorfile/OptionCard'
import ProfileCard from '@/components/UserPorfile/ProfileCard'
import ProfileForm from '@/components/UserPorfile/ProfileForm'
import { Bell, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useUser } from '@/hooks/useUser'

const UserPorfile = () => {
  const { user } = useSelector((state) => state.user)
  const { updateImage, updateProfile, updatePasswordUser, getAllPersonPorfile } = useUser()

  useEffect(() => {
    getAllPersonPorfile()
  }, [])

  const avatarUrl = user?.image
    || `https://ui-avatars.com/api/?name=${encodeURIComponent((user?.name || 'U') + ' ' + (user?.lastName || ''))}&background=1e3a5f&color=fff&size=310`

  return (
    <div className="min-h-screen bg-[#f4f8fc] px-6 py-10">
      <main className="max-w-[1100px] mx-auto grid grid-cols-[310px_1fr] gap-9">

        {/* LEFT */}
        <section className="flex flex-col gap-7">
          <img
            src={avatarUrl}
            alt="profile"
            className="w-full h-[310px] object-cover rounded-2xl"
          />
          <ProfileCard />
        </section>

        {/* RIGHT */}
        <section className="flex flex-col gap-8">
          <ProfileForm updateImage={updateImage} updateProfile={updateProfile} updatePasswordUser={updatePasswordUser} />

          <div className="grid grid-cols-2 gap-6">
            <OptionCard
              icon={<ShieldCheck size={26} />}
              title="Privacidad"
              text="Gestiona quién puede ver tu actividad en la comunidad."
            />
            <OptionCard
              icon={<Bell size={26} />}
              title="Notificaciones"
              text="Configura tus alertas de cursos y mensajes directos."
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default UserPorfile
