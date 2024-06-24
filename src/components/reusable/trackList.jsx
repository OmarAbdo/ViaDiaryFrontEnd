const files = [
  {
    title: "My Diary in Poland",
    source:
      "https://images.ctfassets.net/3sa0209epr53/1QgYM3yAewGmKw6GWEskC4/c86d28eac79e8b143cfb6c329ca19733/audible-hero-listener_tan_coat_in_newark.jpg?fm=jpg&fl=progressive&fit=fill&q=85&w=1120&h=800",
  },
  {
    title: "Why I like taking the bus",
    source:
      "https://images.immediate.co.uk/production/volatile/sites/3/2022/10/man-listening-to-audiobook-on-the-bus-how-does-audible-work-b57b949.png",
  },
  {
    title: "My Diary in Poland",
    source:
      "https://images.ctfassets.net/3sa0209epr53/1QgYM3yAewGmKw6GWEskC4/c86d28eac79e8b143cfb6c329ca19733/audible-hero-listener_tan_coat_in_newark.jpg?fm=jpg&fl=progressive&fit=fill&q=85&w=1120&h=800",
  },
  {
    title: "Why I like taking the bus",
    source:
      "https://images.immediate.co.uk/production/volatile/sites/3/2022/10/man-listening-to-audiobook-on-the-bus-how-does-audible-work-b57b949.png",
  },
  {
    title: "My Diary in Poland",
    source:
      "https://images.ctfassets.net/3sa0209epr53/1QgYM3yAewGmKw6GWEskC4/c86d28eac79e8b143cfb6c329ca19733/audible-hero-listener_tan_coat_in_newark.jpg?fm=jpg&fl=progressive&fit=fill&q=85&w=1120&h=800",
  },
];

export default function TrackList() {
  return (
    <ul role="list" className="flex flex-wrap gap-x-4 gap-y-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block overflow-hidden rounded-lg">
            {/* Responsive img with fixed 500x500 dimensions */}
            <img
              src={file.source}
              alt=""
              style={{ width: "15vw", height: "15vw" }}
              className="max-w-full max-h-full object-cover group-hover:opacity-75"
            />
          </div>
          <p> {file.title} </p>
        </li>
      ))}
    </ul>
  );
}