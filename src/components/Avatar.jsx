function Avatar({ src, alt, size = 40, className = '' }) {
  return (
    <img
      src={src}
      alt={alt || 'avatar'}
      width={size}
      height={size}
      className={`avatar ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}

export default Avatar;
