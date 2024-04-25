const steps = [
    {
        selector: '[data-tour="step-1"]',
        content: <p className="text-lg font-black">Hello World</p>
    },
    {
        selector: '[data-tour="step-2"]',
        content: <div className="p-5">
            <img src="/favicon.png" alt="" />
            <p className="text-lg font-black">Hello World</p>
            <p className="text-sm">Lorem tis, quidem voluptatem, doloremque pariatur perferendis ipsum voluptatibus. Unde eius quas sunt molestias?</p></div>
    },
    {
        selector: '[data-tour="step-3"]',
        content: "text 3"
    }
];

export default steps;