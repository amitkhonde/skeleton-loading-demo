function UserCard({ name, email, profileUrl }) {
  return (
    <div className="user-card">
      <img
        className={!profileUrl ? "skeleton" : ""}
        src={profileUrl || "http://placehold.jp/200.png?text=Profile"}
        alt="profile"
      />
      <p className={!name ? "skeleton" : ""}>{name}</p>
      <p className={!email ? "skeleton" : ""}>{email}</p>
    </div>
  );
}

export default UserCard;
