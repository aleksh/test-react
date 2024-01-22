export default function House({name, animal, founder, startColor, endColor}) {
  return (
    <div className="house">
      <div className="title">
        <h4>{name}</h4>
        <span>{animal}</span>
      </div>
      <div className="gradient" style={{background: `linear-gradient(45deg, ${startColor}, ${endColor})`}}></div>
      <div className="founder">Founder: <span>{founder}</span></div>
    </div>
  );
}