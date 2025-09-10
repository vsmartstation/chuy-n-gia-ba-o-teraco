'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import Chatbot from '@/components/chatbot/Chatbot'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">Bảo - Chuyên gia Terraco</h1>
            <Badge variant="secondary">Tư vấn giải pháp kiến trúc</Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveSection('overview')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'overview' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Tổng quan
            </button>
            <button 
              onClick={() => setActiveSection('company')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'company' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Công ty
            </button>
            <button 
              onClick={() => setActiveSection('products')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'products' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Sản phẩm
            </button>
            <button 
              onClick={() => setActiveSection('technical')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'technical' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Kỹ thuật
            </button>
            <button 
              onClick={() => setActiveSection('applications')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'applications' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Ứng dụng
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Phân Tích Chuyên Sâu về các Dòng Sản Phẩm
              <span className="text-primary block mt-2">Hoàn Thiện Bề Mặt Trang Trí</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Báo cáo phân tích chuyên sâu về các dòng sản phẩm Terraco - Chia sẻ từ chuyên gia Bảo với nhiều năm kinh nghiệm trong ngành vật liệu xây dựng
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm">Kiến trúc</Badge>
            <Badge variant="outline" className="text-sm">Kỹ thuật</Badge>
            <Badge variant="outline" className="text-sm">Xây dựng</Badge>
            <Badge variant="outline" className="text-sm">Vật liệu cao cấp</Badge>
          </div>
          <div className="relative w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden">
            <img
              src="/terrace-professional.jpg"
              alt="Terraco Vietnam Professional Construction"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">Chất lượng Thụy Điển - Giải pháp Việt Nam</p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Executive Summary */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Tóm tắt Báo cáo</h2>
            <p className="text-muted-foreground">Phân tích chuyên sâu từ góc nhìn chuyên gia Bảo về Terraco</p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Những phát hiện chính</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Chuyên gia hàng đầu</h4>
                  <p className="text-sm text-muted-foreground">
                    Bảo là chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực vật liệu xây dựng, đặc biệt am hiểu sâu về các sản phẩm Terraco và ứng dụng thực tế.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Kiến thức chuyên sâu</h4>
                  <p className="text-sm text-muted-foreground">
                    Với sự am hiểu về công nghệ Thụy Điển và điều kiện khí hậu Việt Nam, Bảo cung cấp giải pháp tối ưu cho từng dự án cụ thể.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Tư vấn tận tâm</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ sơn phủ ngoại thất hiệu suất cao đến các dòng sơn hiệu ứng nội thất tinh xảo, Bảo luôn sẵn sàng tư vấn giải pháp phù hợp nhất.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Giá trị thực tế</h4>
                  <p className="text-sm text-muted-foreground">
                    Tập trung vào hiệu quả và giá trị lâu dài, giúp khách hàng lựa chọn sản phẩm phù hợp với nhu cầu và ngân sách.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Product Catalog */}
        <section className="space-y-6" id="products">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Danh mục Sản phẩm Terraco</h2>
            <p className="text-muted-foreground">Tổng hợp từ chuyên gia Bảo</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Hệ sinh thái Sản phẩm Terraco</CardTitle>
              <CardDescription>Tổng hợp từ góc nhìn chuyên gia</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                  <TabsTrigger value="exterior">Ngoại thất</TabsTrigger>
                  <TabsTrigger value="interior">Nội thất</TabsTrigger>
                  <TabsTrigger value="systems">Hệ thống</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Chuẩn bị Bề mặt</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Handycoat Interior/Exterior, Terramix, Terrabond A, TERRACO Penetrating Primer
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Lớp phủ Hoàn thiện</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Mặt tiền kiến trúc, Nội thất trang trí, Hệ thống chống thấm
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Hệ thống Khác</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Keo dán gạch, Sơn sàn, Hệ thống âm học Terraco Ambient™
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="exterior" className="space-y-4">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src="/terrace-exterior.jpg"
                      alt="Terraco Exterior Finishing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">Giải pháp hoàn thiện ngoại thất hiệu suất cao</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Terracoat Stone</CardTitle>
                        <CardDescription>Hiệu ứng đá Granite</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Đặc tính:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Lớp phủ acrylic gốc nước</li>
                            <li>• Chống chịu thời tiết tuyệt vời</li>
                            <li>• Nhiều màu sắc hấp dẫn</li>
                            <li>• Thi công bằng súng phun</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Ứng dụng:</h4>
                          <p className="text-sm text-muted-foreground">
                            Tường điểm nhấn, khối đế, biệt thự - nơi thẩm mỹ là yếu tố quyết định
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Flexitex EWC</CardTitle>
                        <CardDescription>Lớp bảo vệ đàn hồi hiệu suất cao</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Ưu điểm kỹ thuật:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Độ linh hoạt vĩnh viễn (-40°C đến +50°C)</li>
                            <li>• Che lấp vết nứt do co ngót</li>
                            <li>• Chống tia UV, độ bền màu cao</li>
                            <li>• Công nghệ chống bám bẩn</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Ứng dụng:</h4>
                          <p className="text-sm text-muted-foreground">
                            Tòa nhà cao tầng, khách sạn, bệnh viện - nơi hiệu suất lâu dài là ưu tiên
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="interior" className="space-y-4">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src="/terrace-interior.jpg"
                      alt="Terraco Interior Finishing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">Giải pháp hoàn thiện nội thất sang trọng</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Terraco Antique Stucco</CardTitle>
                        <CardDescription>Hiệu ứng đá Cẩm thạch</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Sơn trang trí tạo hiệu ứng đá cẩm thạch bóng, đa sắc độ cho không gian nội thất sang trọng.
                        </p>
                        <div className="mt-3">
                          <Badge variant="outline">Cao cấp</Badge>
                          <Badge variant="outline">Kỹ thuật thi công điêu luyện</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Handyplus</CardTitle>
                        <CardDescription>Hiệu ứng ánh ngọc trai</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Lớp phủ trên cùng tạo hiệu ứng ánh ngọc trai, thân thiện môi trường, VOC thấp dưới 5 g/L.
                        </p>
                        <div className="mt-3">
                          <Badge variant="outline">Terraco EcoLife</Badge>
                          <Badge variant="outline">Không dung môi</Badge>
                          <Badge variant="outline">Không formaldehyde</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="systems" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">So sánh các Hệ thống Hoàn thiện</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Đặc điểm</th>
                              <th className="text-left p-2">Terracoat Stone</th>
                              <th className="text-left p-2">Flexitex EWC</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2 font-medium">Chức năng chính</td>
                              <td className="p-2">Thẩm mỹ (Hiệu ứng đá)</td>
                              <td className="p-2">Hiệu suất (Bảo vệ đàn hồi)</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">Loại chất kết dính</td>
                              <td className="p-2">Acrylic</td>
                              <td className="p-2">100% Acrylic nguyên chất</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">Đặc tính nổi bật</td>
                              <td className="p-2">Vẻ ngoài giống đá tự nhiên</td>
                              <td className="p-2">Độ linh hoạt vĩnh viễn</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">Phương pháp thi công</td>
                              <td className="p-2">Súng phun</td>
                              <td className="p-2">Súng phun hoặc Rulo</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-medium">Ứng dụng lý tưởng</td>
                              <td className="p-2">Tường điểm nhấn, biệt thự</td>
                              <td className="p-2">Tòa nhà cao tầng, khách sạn</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Technical Analysis */}
        <section className="space-y-6" id="technical">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Đánh giá Kỹ thuật</h2>
            <p className="text-muted-foreground">Phân tích chuyên sâu các hệ thống hoàn thiện</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Hệ thống Ngoại thất</CardTitle>
                <CardDescription>Giải pháp cho mặt tiền kiến trúc</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="terracost">
                    <AccordionTrigger>Terracoat Stone - Chi tiết kỹ thuật</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Thành phần & Đặc tính:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Vữa gốc acrylic hệ nước</li>
                          <li>• Chống chịu thời tiết tuyệt vời</li>
                          <li>• Phù hợp khí hậu nhiệt đới</li>
                          <li>• Đa dạng màu sắc</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Quy trình thi công:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Thi công bằng súng phun chuyên dụng</li>
                          <li>• Yêu cầu bề mặt sạch, ổn định</li>
                          <li>• Cần thợ thi công có tay nghề cao</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="flexitex">
                    <AccordionTrigger>Flexitex EWC - Công nghệ tiên tiến</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Công nghệ cốt lõi:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Polyme đàn hồi liên kết ngang</li>
                          <li>• Màng sơn "thở" cho phép hơi ẩm thoát</li>
                          <li>• Rào cản khí CO2 chống ăn mòn bê tông</li>
                          <li>• Công nghệ chống bám bẩn hóa học</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Hệ thống thi công:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• 2 lớp: lớp 1 pha loãng ≤20%, lớp 2 nguyên chất</li>
                          <li>• Sử dụng TERRACO Penetrating Primer</li>
                          <li>• Thi công bằng súng phun hoặc rulo</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hệ thống Nội thất</CardTitle>
                <CardDescription>Giải pháp trang trí không gian bên trong</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="stucco">
                    <AccordionTrigger>Hiệu ứng Khoáng và Bề mặt Bóng</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Terraco Antique Stucco:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Hiệu ứng đá cẩm thạch cổ điển</li>
                          <li>• Bề mặt bóng, đa sắc độ</li>
                          <li>• Kỹ thuật thi công điêu luyện</li>
                          <li>• Phù hợp không gian sang trọng</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Terraco Fresco:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Bề mặt hoàn thiện mềm mại, mờ</li>
                          <li>• Giống vữa, nghệ thuật</li>
                          <li>• Độc đáo, khác biệt</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="pearl">
                    <AccordionTrigger>Hệ thống Ánh ngọc trai và Ánh kim</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Handyplus:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Hỗn hợp polyme acrylic và bột ngọc trai</li>
                          <li>• VOC thấp dưới 5 g/L</li>
                          <li>• Dễ sử dụng, chống thấm tốt</li>
                          <li>• Thuộc dòng Terraco EcoLife</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Các sản phẩm khác:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Vicoat Metalic: hiệu ứng ánh kim</li>
                          <li>• Camay Velvet-Tex: hiệu ứng đổi màu</li>
                          <li>• Đa dạng lựa chọn thẩm mỹ</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Applications and Market */}
        <section className="space-y-6" id="applications">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Ứng dụng và Thị trường</h2>
            <p className="text-muted-foreground">Thực hành tốt nhất và bối cảnh thương mại</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sự phù hợp trong Ứng dụng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Chuẩn bị bề mặt:</h4>
                  <p className="text-sm text-muted-foreground">
                    Sử dụng Handycoat làm lớp nền, sơn lót chuyên dụng để đảm bảo hiệu suất và bảo hành.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Độ khó thi công:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Handyplus:</span>
                      <Badge variant="secondary">Dễ sử dụng</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Terracoat Stone:</span>
                      <Badge variant="destructive">Cần chuyên gia</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Antique Stucco:</span>
                      <Badge variant="destructive">Kỹ thuật cao</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Lợi ích chính:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Giá trị thẩm mỹ cao</li>
                    <li>• Dễ vệ sinh, lau chùi</li>
                    <li>• Bề mặt lì, mịn, không xốp</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Phân tích Giá cả</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Chiến lược định giá:</h4>
                  <p className="text-sm text-muted-foreground">
                    Định giá dựa trên giá trị thẩm mỹ và hiệu suất kỹ thuật, không phải chi phí sản xuất.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Phân khúc cao cấp:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Antique Stucco (25kg):</span>
                      <span className="font-medium">1.575.090 VNĐ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Handyplus (18L):</span>
                      <span className="font-medium">2.152.623 VNĐ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Camay Velvet (25kg):</span>
                      <span className="font-medium">4.520.508 VNĐ</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Kênh phân phối:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Sieuthison.vn</Badge>
                    <Badge variant="outline">Sonnuocmientrung.com</Badge>
                    <Badge variant="outline">Vuongquocson.vn</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thị trường Mục tiêu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Dự án quy mô lớn:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Sân bay</li>
                    <li>• Khách sạn quốc tế</li>
                    <li>• Trung tâm thương mại</li>
                    <li>• Khu công nghiệp</li>
                    <li>• Công trình cao tầng</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Đối tượng khách hàng:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Kiến trúc sư</li>
                    <li>• Nhà thầu xây dựng</li>
                    <li>• Chủ đầu tư</li>
                    <li>• Chuyên gia kỹ thuật</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Lợi thế cạnh tranh:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Hệ thống sản phẩm đồng bộ</li>
                    <li>• Hỗ trợ kỹ thuật chuyên sâu</li>
                    <li>• Công nghệ toàn cầu</li>
                    <li>• Sản xuất tại chỗ</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Conclusions and Recommendations */}
        <section className="space-y-6" id="conclusions">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Kết luận và Khuyến nghị</h2>
            <p className="text-muted-foreground">Tổng hợp và hướng dẫn cho chuyên gia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tóm tắt Chuyên môn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Chuyên gia uy tín</h4>
                  <p className="text-sm text-muted-foreground">
                    Bảo là chuyên gia hàng đầu trong lĩnh vực vật liệu xây dựng, với kiến thức sâu rộng về các sản phẩm Terraco và ứng dụng thực tế.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Tư vấn chuyên sâu</h4>
                  <p className="text-sm text-muted-foreground">
                    Phương pháp tiếp cận toàn diện, từ chuẩn bị bề mặt đến lớp hoàn thiện, đảm bảo hiệu quả tối ưu cho từng dự án.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Giải pháp đa dạng</h4>
                  <p className="text-sm text-muted-foreground">
                    Sản phẩm được phân khúc rõ ràng: hiệu suất cao cho mặt tiền lớn và thẩm mỹ cao cho ứng dụng trang trí.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Hướng dẫn thực tế</h4>
                  <p className="text-sm text-muted-foreground">
                    Cung cấp khuyến nghị cụ thể và thiết thực, giúp khách hàng đưa ra quyết định đầu tư thông minh.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Khuyến nghị từ Chuyên gia Bảo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="highrise">
                    <AccordionTrigger>Nhà cao tầng & Công trình lớn</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Ưu tiên Flexitex EWC do khả năng che lấp vết nứt, độ bền cao và ít cần bảo trì. Chi phí ban đầu cao hơn được bù đắp bằng tiết kiệm chi phí sửa chữa dài hạn.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="aesthetic">
                    <AccordionTrigger>Ngoại thất yêu cầu thẩm mỹ cao</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Sử dụng Terracoat Stone cho biệt thự, khối đế, lối vào. Cần đảm bảo nhà thầu có kinh nghiệm thi công bằng súng phun.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="interior">
                    <AccordionTrigger>Dự án nội thất sang trọng</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Tận dụng Antique Stucco cho hiệu ứng đá cẩm thạch, Handyplus hoặc Camay Velvet-Tex cho hiệu ứng ánh ngọc trai/ánh kim. Luôn chỉ định toàn bộ hệ thống và làm mẫu thử.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="general">
                    <AccordionTrigger>Khuyến nghị chung</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Luôn làm việc với đội ngũ hỗ trợ kỹ thuật. Cẩn thận với tuyên bố tiếp thị về giá cả, lập ngân sách dựa trên báo giá cụ thể.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6 py-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Liên hệ Chuyên gia Bảo</h2>
            <p className="text-muted-foreground">Hãy liên hệ để được tư vấn chuyên sâu về Terraco</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Thông tin liên hệ</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Chuyên gia Bảo</strong><br />
                    Điện thoại: 0916326279<br />
                    Email: baoterraco@example.com
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Thông tin Terraco</h4>
                  <p className="text-sm text-muted-foreground">
                    Nhà máy: Bình Dương<br />
                    Văn phòng TP.HCM<br />
                    Hotline: (0274) 3820100
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold">Khu vực hoạt động</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Toàn quốc</Badge>
                  <Badge variant="secondary">TP.HCM</Badge>
                  <Badge variant="secondary">Hà Nội</Badge>
                  <Badge variant="secondary">Đà Nẵng</Badge>
                  <Badge variant="secondary">Bình Dương</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <h3 className="text-lg font-semibold">Chuyên gia Bảo</h3>
              <Badge variant="outline">Terraco Expert</Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Tư vấn chuyên sâu về các sản phẩm Terraco - Giải pháp kiến trúc tối ưu cho mọi công trình
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>© 2025 Chuyên gia Bảo</span>
              <span>•</span>
              <span>Tư vấn Terraco chuyên nghiệp</span>
              <span>•</span>
              <span>Đối tác tin cậy của Terraco</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}