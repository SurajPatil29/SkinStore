import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { Home } from "../Pages/Home/Home"
import { BathBody } from "../Pages/BathBody"
import { Blog } from "../Pages/Blog"
import { Brands } from "../Pages/Brands"
import { DiscoverDermstore } from "../Pages/DiscoverDermstore"
import { Fragrance } from "../Pages/Fragrance"
import { HairCare } from "../Pages/HairCare"
import { SignUp } from "../Pages/SignUp"
import { Makeup } from "../Pages/Makeup"
import { Sale } from "../Pages/Sale"
import { SkinCare } from "../Pages/SkinCare"
import { Sunscreen } from "../Pages/Sunscreen"
import { ToolsDevices } from "../Pages/ToolsDevices"
import { LogIn } from "../Pages/LogIn"
import { Bucket } from '../NavbarHeader/Bucket';
import { Bestseller } from "../Pages/Home/Bestseller";
import { SearchDisplay } from '../NavbarHeader/SearchDisplay';
import { Cart } from '../NavbarHeader/Cart';
import { PaymentPage } from '../NavbarHeader/PaymentPage';


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bath-body" element={<PrivateRoutes><BathBody /></PrivateRoutes>} />
            <Route path="/blog" element={<PrivateRoutes><Blog /></PrivateRoutes>} />
            <Route path="/brands" element={<PrivateRoutes><Brands /></PrivateRoutes>} />
            <Route path="/discover-dermstore" element={<PrivateRoutes><DiscoverDermstore /></PrivateRoutes>} />
            <Route path="/fragrance" element={<PrivateRoutes><Fragrance /></PrivateRoutes>} />
            <Route path="/hair-care" element={<PrivateRoutes><HairCare /></PrivateRoutes>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/makeup" element={<PrivateRoutes><Makeup /></PrivateRoutes>} />
            <Route path="/sale" element={<PrivateRoutes><Sale /></PrivateRoutes>} />
            <Route path="/skin-care" element={<PrivateRoutes><SkinCare /></PrivateRoutes>} />
            <Route path="/sunscreen" element={<PrivateRoutes><Sunscreen /></PrivateRoutes>} />
            <Route path="/tools-devices" element={<PrivateRoutes><ToolsDevices /></PrivateRoutes>} />
            <Route path='/bucket' element={<PrivateRoutes><Bucket /> </PrivateRoutes>} />
            <Route path='/bestseller' element={<PrivateRoutes><Bestseller /> </PrivateRoutes>} />
            <Route path='/searchdisplay' element={<PrivateRoutes><SearchDisplay /> </PrivateRoutes>} />
            <Route path='/cart' element={<PrivateRoutes><Cart /> </PrivateRoutes>} />
            <Route path='/payment' element={<PrivateRoutes><PaymentPage /> </PrivateRoutes>} />

            {/* <Route path="*" element={<NotFound />} /> Catch-all route for undefined paths */}
        </Routes>
    )
}

export { AllRoutes }




