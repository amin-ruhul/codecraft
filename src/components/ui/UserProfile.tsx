import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type UserProfileProps = {
  src: string;
  alt?: string;
  name: string;
};

function UserProfile({ src, alt, name }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
      <span>{name}</span>
    </div>
  );
}

export default UserProfile;
