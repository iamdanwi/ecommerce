import { MenuIcon, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Fruits & Vegetables", href: "#" },
        { name: "Dairy & Eggs", href: "#" },
        { name: "Bakery", href: "#" },
        { name: "Meat & Seafood", href: "#" },
    ];
    return (
        <header className='bg-white py-3 sticky top-0 z-50'>
            <nav className='flex items-center justify-between container mx-auto'>
                {/* Logo */}
                <Link href="/" className={`font-extrabold text-4xl font-logo`}>
                    Fresh Groceries
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-[95%] font-base text-slate-700 hover:text-slate-900 hover:underline">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center flex-row-reverse'>
                    {/* Mobile navigation */}
                    <div className='block md:hidden mx-3'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <MenuIcon />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle><Link href="/" className={`font-extrabold text-4xl font-logo`}>
                                        Fresh Groceries
                                    </Link></SheetTitle>
                                    <SheetDescription>
                                        Fresh picks, fancy flavors await. Tap to fill your cart with joy!
                                    </SheetDescription>
                                </SheetHeader>
                                {navItems.map((item) => (
                                    <div className='mx-5' key={item.name}>
                                        <Link href={item.href} className="text-[95%] font-base text-slate-700 hover:text-slate-900 hover:underline">
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}

                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* cart and login button */}
                    <div className="flex space-x-4 items-center">
                        <Link href="/cart" className="text-lg font-medium">
                            <ShoppingBag />
                        </Link>
                        <Link href="/login" className="text-lg font-medium">
                            <Button className='cursor-pointer'>Login</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;