import { PrimaryButton } from "./components/atoms/buutton/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buutton/SecondaryBuutton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  name: "kanp",
  // https://source.unsplash.com/画像のid でAPIから画像を使用できる
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "000-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}
