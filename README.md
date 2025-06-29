# Calculator

A modern, responsive web-based calculator with a sleek glassmorphism design, dark/light theme support, and advanced features for both desktop and mobile use.

## 🚀 Features

### **Core Calculator Functions**
- **Basic Arithmetic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- **Advanced Number Handling**: Leading zeros support (05+3), decimal numbers, negative numbers
- **Percentage Calculations**: Quick percentage conversion with % key
- **Expression Validation**: Smart validation prevents invalid operations
- **Error Handling**: Graceful error handling with visual feedback

### **Modern UI & Design**
- **Glassmorphism Design**: Beautiful glass-like effects with backdrop blur
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Button hover effects, click animations, and transitions
- **Professional Typography**: Inter font family for clean readability

### **Enhanced User Experience**
- **Calculation History**: Stores last 10 calculations with timestamps
- **Clickable History**: Click any history item to reuse the result
- **Expression Preview**: See your current expression above the main display
- **Visual Feedback**: Success/error animations and button press effects
- **Auto-Focus**: Calculator automatically focuses for keyboard input

### **Keyboard Support**
- **Full Keyboard Input**: Use number keys (0-9) and operators (+, -, *, /)
- **Function Keys**: Enter (=), Escape (Clear All), Backspace/C (Clear)
- **Shortcuts**: H (History), % (Percentage)
- **Visual Feedback**: Buttons animate when corresponding keys are pressed
- **Debug Mode**: Console logging for troubleshooting

### **Mobile Optimization**
- **Compact Design**: Smaller, phone-friendly interface
- **Touch-Friendly**: Optimized button sizes for mobile use
- **Responsive Breakpoints**: Adapts to different screen sizes
- **Mobile-First**: Designed with mobile users in mind

## 📁 Project Structure

```
calculator/
├── index.html        # Main HTML file with calculator layout
├── style.css         # CSS styles with glassmorphism and responsive design
├── script.js         # JavaScript with advanced calculator functionality
└── README.md         # Project documentation
```

## 🎨 Design Features

### **Glassmorphism Effects**
- **Backdrop Blur**: Modern glass-like appearance
- **Transparent Backgrounds**: Layered transparency effects
- **Subtle Borders**: Glass border effects
- **Dynamic Shadows**: Depth and elevation

### **Theme System**
- **Dark Theme**: Professional dark interface with blue gradients
- **Light Theme**: Clean light interface with pink gradients
- **Persistent Storage**: Theme preference saved in localStorage
- **Smooth Transitions**: Instant theme switching

### **Color Palette**
- **Dark Theme**: 
  - Background: Linear gradient (#667eea to #764ba2)
  - Calculator: rgba(255, 255, 255, 0.1)
  - Operators: rgba(255, 193, 7, 0.8)
  - Functions: rgba(108, 117, 125, 0.8)
  - Equal: rgba(40, 167, 69, 0.8)

- **Light Theme**:
  - Background: Linear gradient (#f093fb to #f5576c)
  - Calculator: rgba(255, 255, 255, 0.9)
  - Operators: rgba(255, 193, 7, 0.9)
  - Functions: rgba(108, 117, 125, 0.9)
  - Equal: rgba(40, 167, 69, 0.9)

## 🛠️ Technical Implementation

### **HTML Structure**
- **Semantic HTML5**: Proper markup for accessibility
- **Font Awesome Icons**: Professional icon set
- **Responsive Meta Tags**: Mobile viewport optimization
- **Google Fonts**: Inter font family integration

### **CSS Styling**
- **CSS Variables**: Dynamic theming system
- **CSS Grid**: Responsive button layout
- **Flexbox**: Flexible centering and alignment
- **Media Queries**: Mobile-first responsive design
- **Backdrop Filter**: Modern glassmorphism effects

### **JavaScript Functionality**
- **Advanced Input Handling**: Smart number and operator validation
- **History Management**: Local storage for calculation history
- **Theme Management**: Dynamic theme switching
- **Keyboard Events**: Full keyboard support with visual feedback
- **Expression Evaluation**: Safe mathematical expression parsing
- **Error Prevention**: Comprehensive validation and error handling

## 🚀 Usage

### **Basic Operations**
1. Open `index.html` in any modern web browser
2. Click number buttons or use keyboard (0-9) to input values
3. Use operator buttons (+, −, ×, ÷) or keyboard operators
4. Press "=" or Enter to calculate the result
5. Press "C" or Backspace to clear the display

### **Advanced Features**
- **Theme Toggle**: Click the moon/sun icon to switch themes
- **History Panel**: Click the history icon (H) to view past calculations
- **Percentage**: Use % key for quick percentage calculations
- **Keyboard Shortcuts**: Full keyboard support for all operations

### **Mobile Usage**
- **Touch Interface**: Optimized for touch screens
- **Responsive Design**: Adapts to any screen size
- **Compact Layout**: Perfect for mobile devices
- **Gesture Friendly**: Easy to use with thumbs

## 🎯 Key Features

### **Smart Number Handling**
- **Leading Zeros**: Supports "05+3" → 8
- **Decimal Numbers**: Full decimal support
- **Negative Numbers**: Proper negative number handling
- **Validation**: Prevents invalid number formats

### **Professional Features**
- **Calculation History**: Track your last 10 calculations
- **Expression Preview**: See your current expression
- **Visual Feedback**: Animations for all interactions
- **Error Prevention**: Smart validation prevents errors
- **Persistent Settings**: Theme and history saved locally

### **Accessibility**
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA attributes
- **High Contrast**: Clear visual hierarchy
- **Focus States**: Proper focus indicators

## 🔧 Customization

The calculator can be easily customized by modifying:
- **Colors**: Update CSS variables in `:root` and `[data-theme="light"]`
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Modify transition and animation values
- **Features**: Add new functions in `script.js`
- **Styling**: Update button and display styles

## 📱 Browser Compatibility

- **Chrome** (recommended) - Full support
- **Firefox** - Full support
- **Safari** - Full support
- **Edge** - Full support
- **Mobile Browsers** - Optimized for all mobile browsers

## 🎨 Responsive Design

### **Desktop (320px+)**
- Full-size calculator with all features
- Optimal spacing and typography
- Complete keyboard support

### **Tablet (480px and below)**
- Slightly reduced sizes
- Maintained functionality
- Touch-optimized buttons

### **Mobile (360px and below)**
- Compact design
- Minimal padding
- Optimized for small screens

## 🚀 Performance Features

- **Local Storage**: Fast access to history and settings
- **Efficient Rendering**: Optimized CSS and JavaScript
- **Minimal Dependencies**: Only Font Awesome and Google Fonts
- **Lightweight**: Fast loading and smooth operation

## 📄 License

This project is open source and available under the MIT License.

---

**Built with**: HTML5, CSS3, JavaScript  
**Design**: Modern glassmorphism with responsive layout  
**Features**: Professional calculator with advanced functionality  
**Optimized for**: Desktop, tablet, and mobile devices 