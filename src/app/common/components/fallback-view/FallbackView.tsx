
/**
 *This component will triggers when the page loads
 *
 * @export
 * @returns
 */
export function FallbackView() {
    return (
      <div className='splash-screen'>
        <img src='/logo192.png' alt='Start logo' />
        <span>Loading ...</span>
      </div>
    )
  }
  