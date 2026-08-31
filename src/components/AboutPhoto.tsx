import { siteConfig } from "@/lib/data";

export function AboutPhoto() {
  return (
    <div className="about-photo-frame">
      <img
        src={siteConfig.avatar}
        alt={siteConfig.name}
        className="object-cover grayscale"
        draggable={false}
      />
    </div>
  );
}
