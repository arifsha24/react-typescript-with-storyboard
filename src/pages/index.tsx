import { Button } from "@/stories/Button";
import { SimpleInput } from "@/stories/Input";
import { ThumbCard } from "@/stories/ThumbCard";

export default function Home() {
  return (<>
  <section className='banner'>
        <div className='banner-bg'>
            <div className='container-fluid mx-auto min-h-screen'>
                <div className='justify-end p-4 pr-16 flex items-center'>
                    <h3 className='text-4xl font-medium text-white mb-0'>Enter
                    </h3>
                    <span className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                </div>
                <div className='logo'>
                    <h1 className='text-white font-bold text-7xl pt-8 pl-24'>artcryption</h1>
                </div>
                <div className='text-right'>
                    <h3 className='text-4xl font-medium text-white'>nft dropping soon
                    </h3>
                </div>
                <div className='box-content1 grid gap-y-8 pt-32 pl-24'>
                    <hr className='w-24 text-white'/>
                    <div className='text-white font-normal text-2xl'>
                        <h5>Vitamin D</h5>
                        <h5>by AIMSIR Studio</h5>
                    </div>
                    <div className='text-white font-normal text-lg'>
                        <p>curated by Bompas & Parr &<br/>
                        MA Creative & Louisa St. Pierre</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-24 pr-24">
              <SimpleInput
                label="Join Waitlist"
                placeholder="Enter your email"
                primary
                type="text"
              />
            </div>
        </div>
    </section>
    <section>
          <div className="container mx-auto">
            <div className="py-8 gap-4">
              <h3 className="text-4xl py-8 text-black">Feature</h3>
              {/* //Row 1 starts */}
              <div className="py-8">
                <div className="py-8 pr-8">
                  <a href="javascript;" className="text-right">
                    <h5 className="text-3xl text-black">Digital Canapes</h5>
                    <p className="small-text text-slate-400	font-light">view</p>
                  </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                      <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        category="TBD-ETH"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              
              {/* //Row 1 ends */}
              {/* //Row 2 starts */}
              <div className="py-8">
                <div className="py-8 pr-8">
                    <a href="javascript;" className="py-8 pt-8 text-right">
                      <h5 className="text-3xl text-black">Digital Canapes</h5>
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 py-5 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                       <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        category="TBD-ETH"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              {/* //Row 2 ends */}
              {/* //Row 3 starts */}
              <div className="py-8">
                <div className="py-8 pr-8">
                  <a href="javascript;" className="pt-8 text-right">
                    <h5 className="text-3xl text-black">Adam G</h5>
                  </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                       <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        category="TBD-ETH"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              {/* //Row 3 ends */}
            </div>
        </div>
    </section>
    <section id="whyus">
      <div className="container py-12 mx-auto">
        <h3 className="text-4xl font-medium py-6">Why Artcryption?</h3>
        <h5 className="text-3xl font-medium py-4">
        Sell, protect and share your NFTs, creative assets & IP online
        </h5>           
        <ul className="grid grid-cols-2 gap-4 py-6 px-8">
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
                <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
            </span><h5 className="text-2xl mt-2">Time-Stamped Digital Certificates</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
              <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
          </span><h5 className="text-2xl mt-2">Create NFTs and one-of-a-kind collectibles</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
                <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
            </span><h5 className="text-2xl mt-2">Resale Royalties & Split Royalties</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
              <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
          </span><h5 className="text-2xl mt-2">Interoperable</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
                <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
            </span><h5 className="text-2xl mt-2">Track buyers, provenance and price history</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4 pr-24"><span className="pt-2">
                <img src="/endorsedthumb.png" alt="" className="min:w-8 h-auto"/>
            </span><h5 className="text-2xl mt-2">Alternative copyright protection</h5></div></li>
        </ul>
        <div className="py-4">
          <h5 className="py-3 text-base">Join Our Community</h5>
            <div className="py-2 flex items-center gap-4 justify-start">
              <div className="rounded-full border border-black py-2 p-4">
                LinkedIn
              </div>
              <div className="rounded-full border border-black py-2 p-4">
                Instagram
              </div>
              <div className="rounded-full border border-black py-2 p-4">
                Discord
              </div>
              <div className="rounded-full border border-black py-2 p-4">
                Twitter
              </div>
            </div>            
        </div>
      </div>
    </section>
    <section id="reachin">
        <div className="bg-black mx-auto flex align-middle items-center justify-center">
          <div className="container">
              <div className="flex py-16 items-start justify-center">
                <h4 className="text-4xl text-white px-10 mt-2">Join Waitlist</h4>
                <div className="w-96">
                  <SimpleInput
                      className="bg-transparent"
                      placeholder="Enter your email"
                      primary
                      size='96'
                      icon={true}
                      type="text"
                  />
                  <span className="text-white text-xs text-left pr-24">
                    Subscribe to join waitlist and also get access to the latest news and drops
                  </span>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section id="footer">
        <div className="container-fluid mx-auto bg-slate-300 pl-16">
          <div className="grid grid-cols-2">
            <div>
              <div className='logo'>
                        <h1 className='text-black text-8xl font-bold py-8'>artcryption</h1>
              </div>
              <p className="text-black">Artcryption is a platform for creators to share, protect and sell their works showcasing the best in creativity.</p>
            </div>
            <div>
              <div className="logo flex justify-end">
                  <figure className="p-2 pr-16">
                    {/* Add Logo Here */}
                    <img src={'/logosmall.png'} alt="logo-small" />
                  </figure>
              </div>
              <div className="flex pb-4">
                <ul className="text-black text-base grid gap-4">
                  <li>Drops</li>
                  <li>About</li>
                  <li>How It works</li>
                  <li>Curators</li>
                  <li>Feed</li>
                </ul>
                <div className="flex flex-col gap-4 w-96 ml-16">
                  <h4 className="text-black text-xl">Newsletter</h4>
                  <p className="text-slate text-sm font-light pr-24">Subscribe to join the waitlist and get latest news, drops and events.</p>
                  <div className="flex items-bottom">
                    <SimpleInput
                      placeholder=""
                      icon={false}
                      type="text"
                      className="mr-2"
                    />
                    <Button 
                    size = 'medium'
                    backgroundColor="black"
                    label="SUBSCRIBE"
                    className="rounded-lg bg-black text-white rounded mx-2 px-4"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section id="footer-social">
        <div className="grid grid-cols-3 py-2 bg-slate-100">
          <div className="flex items-center">
            {/* Twitter Icon */}
            <span className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="#616161"/>
              </svg>
            </span>
              
            {/* Facebook Icon */}
            <span className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9.19862 21.5H13.1986V13.4901H16.8027L17.1986 9.50977H13.1986V7.5C13.1986 6.94772 13.6463 6.5 14.1986 6.5H17.1986V2.5H14.1986C11.4372 2.5 9.19862 4.73858 9.19862 7.5V9.50977H7.19862L6.80273 13.4901H9.19862V21.5Z" fill="#616161"/>
              </svg>  
            </span>
            
            {/* Instagram Icon  */}
            <span className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="#616161"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#616161"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#616161"/>
              </svg>       
            </span>
            
          </div>
          <a href="" className="font-light text-sm flex justify-center	">© Artcryption Inc. 2021, All Rights Reserved</a>
          <div className="grid grid-cols-3 gap-8 px-4">
            <a className="text-xs font-light text-right" href="">PRESS</a>
            <a className="text-xs font-light text-right" href="">PRIVACY</a>
            <a className="text-xs font-light text-right" href="">TERMS</a>
          </div>
        </div>
    </section>
  </> 
  )
}
