import './Header.css';
import avatarIcon from '../../assets/avatar.svg';

export default function Header({ title }) {
  return (
    <header className="page-header">
      <h2 className="title">{title}</h2>
      <figure className="profile-container">
        <img src={avatarIcon} alt="Avatar" className="avatar-img" />
      </figure>
    </header>
  );
}