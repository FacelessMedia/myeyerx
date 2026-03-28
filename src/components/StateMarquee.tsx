const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export default function StateMarquee() {
  return (
    <div className="relative bg-white/5 backdrop-blur border-t border-white/10 py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...states, ...states].map((state, i) => (
          <span
            key={i}
            className="inline-block px-6 text-sm font-medium text-blue-200/80"
          >
            {state}
          </span>
        ))}
      </div>
    </div>
  );
}
