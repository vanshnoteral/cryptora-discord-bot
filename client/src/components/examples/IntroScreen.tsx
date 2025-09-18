import IntroScreen from '../IntroScreen';

export default function IntroScreenExample() {
  const handleEnter = () => {
    console.log('Enter button clicked - would transition to main site');
  };

  return (
    <div className="dark h-screen">
      <IntroScreen onEnter={handleEnter} />
    </div>
  );
}