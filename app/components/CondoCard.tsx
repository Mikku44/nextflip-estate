import { motion } from 'framer-motion';

export default function CondoCard() {
    return (
        <div className='w-full  min-h-[300px] py-10 grid gap-5 md:grid-cols-2'>
            <section className="flex flex-col justify-between">
                <div className="">
                    <div className="lg:h-[42px]  overflow-clip mb-4">
                        <motion.div
                            initial={{
                                y: 18, opacity: 0
                            }}
                            whileInView={{
                                y: 0, opacity: 1
                            }}
                            transition={{
                                duration: 0.4
                            }}
                            className="text-5xl  text-amber-950/90 ">The Cube Loft Srinakarin
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{
                            y: -18, opacity: 0
                        }}
                        whileInView={{
                            y: 0, opacity: 1
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        className="text-amber-950/80 italic font-[300]">คอนโดสไตล์ Retro Loft ที่ผสมผสานระหว่างความ Classic และความ Modern
                        เข้าด้วยกันอย่างลงตัว โดยมีการตกแต่งห้องรูปแบบ Loft ซึ่งเน้นสร้างความต่อเนื่องของพื้นที่ด้วยห้องที่กว้าง เพดานสูง
                        และประตูหน้าต่างขนาดใหญ่ ตกแต่งด้วยวัสดุที่เน้นการโชว์ผิวสัมผัส ตอบโจทย์ทุกรูปแบบไลฟ์ไสตล์คนรุ่นใหม่
                    </motion.div>
                </div>

                {/* bottom */}
                <div className="">
                    <div className="text-xl text-amber-950/80 font-[300]">
                        2.xx ล้านบาท
                    </div>
                    <div className="text-sm text-black/80 font-[300]">
                        268 196 Samrong Nuea, Mueang Samut Prakan District, Samut Prakan 10270
                    </div>
                </div>
            </section>

            {/* Images */}

            <div className="grid grid-cols-2 justify-items-end gap-2">
                <div className="bg-black h-[250px] md:w-2/3">
                    <img
                        className='w-full h-full object-cover'
                        src="https://cdn-cms.pgimgs.com/property-review/2019/09/The-Cube-Loft-Srinakarin-Theparak_019.jpg"
                        alt="condo" />
                </div>
                <div className="bg-black h-[350px] w-full">
                    <img
                        className='w-full h-full object-cover'
                        src="https://condonayoo.com/wp-content/uploads/2019/08/The-Cube-Loft-Srinakarin-Theparak-1.jpg"
                        alt="condo" />
                </div>
            </div>
        </div>
    )
}
