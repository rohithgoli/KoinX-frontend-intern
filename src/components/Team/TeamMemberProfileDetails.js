import React from 'react'

const TeamMemberProfileDetails = ({name, designation}) => {
  return (
    <div className="team-member-profile-details-container">
        <img 
            src={require("../../../public/user.jpg")}
            alt={`${name}-profile-image`}
            className="team-member-profile-pic"
        />
        <p className="team-member-name">{name}</p>
        <p className="team-member-designation">{designation}</p>
    </div>
  )
}

export default TeamMemberProfileDetails