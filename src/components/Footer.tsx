import { Zap } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-sm">
      <div>ruhul© 2024 All Rights Reserved</div>
      <div className="flex items-center space-x-2">
        <Zap className="h-4 w-4 text-yellow-500" />
        <span></span>
      </div>
    </footer>
  );
}

export default Footer;
