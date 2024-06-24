import ContentRow from "../../components/reusable/contentRow";

export default function Main() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ContentRow headerValue="Tracks" />
      <ContentRow headerValue="Playlists" />
      <ContentRow headerValue="Genres" />
    </div>
  );
}
