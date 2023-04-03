import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
class App extends Component {
  constructor(props) {
    super(props);
  }
  generatePDF = () => {
    const input = document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('pdf-document.pdf');
    });
  };

  render() {
    return (
      <div className="app">
        <div id="pdf-content">
          <Info />
          <Education />
          <Skills />
          <Experience />
        </div>
        <button onClick={this.generatePDF}>Download PDF</button>
      </div>
    );
  }
}

export default App;
