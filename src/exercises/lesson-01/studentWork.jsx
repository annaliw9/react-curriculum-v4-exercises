//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Shuna Li';
  const age = 29;
  const hobbies = ['Zumba', 'Movies', 'Traveling', 'Photography'];

  return (
    <div>
      <h3>About Me</h3>
      <p>
        My name is {name} and I&apos;m {age}. I&apos;m a full-stack software
        engineer from San Francisco building seamless web applications, from
        interactive front-ends to scalable back-end systems.
      </p>
      <p>
        I&apos;m passionate about turning ideas into full-stack performance. I
        blend front-end design and back-end logic to build responsive,
        accessible, and scalable web applications that truly delight users.
      </p>
      <p>When I&apos;m not coding, I enjoy:</p>
      <ul>
        {hobbies.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
