const Hello = () => {
  return <h2>Ola, componente</h2>;
};

export default function Home() {
  console.log("Que tipo de componente sou?");
  return (
    <main>
      <h1>Pagina Principal</h1>
      <Hello />
    </main>
  );
}
