// Import Suspense để hỗ trợ tải component bất đồng bộ (lazy loading)
import { Suspense } from "react";
// Import BrowserRouter để định tuyến trong ứng dụng React SPA
import { BrowserRouter } from "react-router-dom";

// Import thành phần định tuyến chính của ứng dụng
import { AppRoutes } from "@/app/routes/AppRoutes";
// Import layout gốc bao quanh nội dung chính (có thể chứa header, footer, v.v.)
import { RootLayout } from "@/app/layout/RootLayout";
// import { Loading } from "@/shared/ui/Loading"; // Đã tạm thời comment, có thể dùng cho fallback
// Import StoreProvider để bọc ứng dụng với Redux hoặc một state management provider
import { StoreProvider } from "@/app/providers/StoreProvider";

// Component App chính
const App = () => {
  return (
    // Cung cấp store toàn cục cho toàn ứng dụng
    <StoreProvider>
      {/* Kích hoạt routing với BrowserRouter */}
      <BrowserRouter>
        {/* Layout gốc của ứng dụng */}
        <RootLayout>
          {/* Suspense giúp xử lý loading cho các component được lazy load */}
          <Suspense fallback={<>Loading</>}>
            {/* Thành phần chứa các route */}
            <AppRoutes />
          </Suspense>
        </RootLayout>
      </BrowserRouter>
    </StoreProvider>
  );
};

// Xuất component App ra ngoài để sử dụng ở file chính (main.tsx)
export default App;


