import './App.css';

export const App = () => {
  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input type="text" />
        <button>Generate</button>
      </div>
      <div className='captioned-image'>
        <img height={200} width={200} style={{ marginBottom: '10px' }} src="" alt="" />
        <span>Caption</span>
      </div>
    </>
  )
}
