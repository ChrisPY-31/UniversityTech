const OptionCard = ({ icon, title, text }) => {
  return (
    <div className="bg-[#eef3f8] rounded-2xl p-7">
      <div className="text-cyan-700 mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-2xl mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-7">
        {text}
      </p>
    </div>
  );
};

export default OptionCard;