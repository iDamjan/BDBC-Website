import "./TeamMember.css";

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
        <div className="member-overlay">
          <p>{member.bio}</p>
        </div>
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <p className="member-role">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
