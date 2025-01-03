import Avatar from "../Avatar";

interface Props {
  name: string;
  email: string;
}

const UserCard = ({ name, email }: Props) => (
  <div className="w-40 bg-light-300 py-4 px-3 flex justify-center items-center flex-col rounded-xl text-center">
    <Avatar name={name} />
    <p className="font-medium text-dark-400 mt-3 line-clamp-1 w-full break-words">
      {name}
    </p>
    <p className="text-light-500 text-sm line-clamp-1 break-words w-full">
      {email}
    </p>
  </div>
);

export default UserCard;
