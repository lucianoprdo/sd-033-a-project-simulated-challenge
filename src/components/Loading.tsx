import { useState } from 'react';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
    </div>
  );
}

export default Loading;
