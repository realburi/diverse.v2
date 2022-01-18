import React from 'react'

const WeDraft = () => {
    return (
        <div className='w-full py-10 xl:py-20 hidden lg:block'>
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='w-2/4 flex flex-col justify-center items-center'>
                        <div className='text-center'>
                            <h1 className=' text-larger' id='We' style={{fontFamily: 'Magistral'}}>Бид ?</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center pt-40'>
                            <h1 className=' pt-10 text-2xl font-bold w-9/12' style={{fontFamily: 'Magistral'}}>Эрхэм зорилго</h1>
                            <p className='origin-center transform rotate-1 py-5 w-9/12 font-extralight' style={{fontFamily:'MagistralRegular'}}>Блокчэйн технологийн шийдлийг хамгийн өндөр түвшинд хөгжүүлж, харилцагчиддаа үнэ цэнийг бүтээхэд хамтран ажиллахыг зорьдог.</p>
                        </div>
                    </div>
                    <div className=' w-2/4'>
                        <div className=''>
                            <h1 className='font-bold text-2xl' style={{fontFamily: 'Magistral'}}>Алсын хараа</h1>
                            <p className=' origin-bottom-left transform -rotate-1 py-5 font-extralight' style={{fontFamily:'MagistralRegular'}}>Монгол хөгжүүлэгчдийг блокчэйн хөгжүүлэлтэд бэлтгэж, блокчэйн шийдлээр олон улсын тавцанд өрсөлдөх.</p>
                        </div>
                        <div className=''>
                            <h1 className='origin-bottom-left transform -rotate-1 py-5 font-bold text-2xl' style={{fontFamily: 'Magistral'}}>Бидний үнэ цэн</h1>
                            <p className='font-extralight' style={{fontFamily:'MagistralRegular'}}>Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, харилцагчдынхаа бүтээгдэхүүнийг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно.</p>
                        </div>
                        <div className='origin-center transform rotate-1 py-10'>
                            <h1 className='font-bold text-2xl' style={{fontFamily: 'Magistral'}}>Бид хэн бэ</h1>
                            <p className='font-extralight pt-5' style={{fontFamily:'MagistralRegular'}}>““Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function We () {
    return (
        <div className='container mx-auto pb-28' style={{fontFamily: 'MagistralRegular'}}>
            <div className='flex items-center'>
                <div className='w-1/2 py-20 pl-24'>
                    <h2 style={{ fontFamily: 'Magistral', fontSize: 200 }}>Бид ?</h2>
                </div>
                <div className='w-1/2 pl-10'>
                    <div>
                        <h3 className='text-2xl' style={{fontFamily: 'Magistral',}}>Эрхэм зорилго</h3>
                        <p className='mt-2 text-lg' style={{width: '600px'}}>Блокчэйн технологийн шийдлийг хамгийн өндөр түвшинд хөгжүүлж, харилцагчиддаа үнэ цэнийг бүтээхэд хамтран ажиллахыг зорьдог.</p>
                    </div>
                    <div className='mt-20'>
                        <h3 className='text-2xl' style={{fontFamily: 'Magistral'}}>Алсын хараа</h3>
                        <p className='text-lg mt-2' style={{width: '600px'}}>Монгол хөгжүүлэгчдийг блокчэйн хөгжүүлэлтэд бэлтгэж, блокчэйн шийдлээр олон улсын тавцанд өрсөлдөх.</p>
                    </div>
                </div>
            </div>
            <div className='flex '>
                <div className='pl-24 w-1/2'>
                    <h3 className='text-2xl' style={{fontFamily: 'Magistral'}}>Бидний үнэ цэн</h3>
                    <p className='text-lg mt-2' style={{width: '600px'}}>Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, харилцагчдынхаа бүтээгдэхүүнийг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно.</p>
                </div>
                <div className='w-1/2 pl-10'>
                    <h3 className='text-2xl' style={{fontFamily: 'Magistral'}}>Бид хэн бэ</h3>
                    <p className='text-lg mt-2' style={{width: '600px'}}>““Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.</p>
                </div>
            </div>
        </div>
    )
}

export default We;
