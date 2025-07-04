// TechMart Electronics Dashboard

// Business Dashboard JavaScript - TechMart Electronics

// Business Data Configuration
const businessData = {
    company: "TechMart Electronics",
    industry: "E-commerce & Electronics",
    founded: 2018,
    employees: 150,
    locations: 3,
    
    // Realistic KPI Data
    kpis: {
        totalRevenue: 2847500,
        totalSales: 15680,
        newCustomers: 1240,
        growthRate: 18.7,
        averageOrderValue: 181.50,
        customerRetentionRate: 87.3,
        conversionRate: 3.2,
        inventoryValue: 1250000
    },
    
    // Monthly Revenue Data (2024)
    monthlyRevenue: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [185000, 198000, 212000, 225000, 238000, 245000, 252000, 268000, 275000, 289000, 312000, 2847500]
    },
    
    // Sales Channels
    salesChannels: {
        labels: ['Online Store', 'Amazon', 'Retail Stores', 'B2B Sales', 'Marketplace'],
        data: [45, 25, 18, 8, 4],
        colors: ['#667eea', '#764ba2', '#fbbf24', '#10b981', '#ef4444']
    },
    
    // Regional Sales
    regionalSales: {
        labels: ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Other'],
        data: [425000, 380000, 320000, 285000, 245000, 792500],
        colors: ['#667eea', '#764ba2', '#fbbf24', '#10b981', '#ef4444', '#8b5cf6']
    },
    
    // Top Products
    topProducts: [
        { name: 'iPhone 15 Pro', sales: 285000, units: 950, margin: 12.5 },
        { name: 'MacBook Air M2', sales: 245000, units: 490, margin: 15.2 },
        { name: 'Samsung Galaxy S24', sales: 198000, units: 660, margin: 11.8 },
        { name: 'AirPods Pro', sales: 165000, units: 1100, margin: 18.5 },
        { name: 'iPad Air', sales: 142000, units: 355, margin: 14.3 }
    ],
    
    // Customer Demographics
    customerDemographics: {
        age: {
            labels: ['18-25', '26-35', '36-45', '46-55', '55+'],
            data: [18, 42, 25, 12, 3],
            colors: ['#667eea', '#764ba2', '#fbbf24', '#10b981', '#ef4444']
        },
        gender: {
            labels: ['Male', 'Female', 'Other'],
            data: [58, 40, 2],
            colors: ['#667eea', '#fbbf24', '#10b981']
        }
    },
    
    // Revenue Sources
    revenueSources: {
        labels: ['Smartphones', 'Laptops', 'Accessories', 'Tablets', 'Smart Home', 'Gaming'],
        data: [35, 28, 18, 12, 5, 2],
        colors: ['#667eea', '#764ba2', '#fbbf24', '#10b981', '#ef4444', '#8b5cf6']
    },
    
    // Customer Lifetime Value
    customerLifetimeValue: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        data: [285, 312, 345, 378, 412, 445]
    },
    
    // Inventory Status
    inventory: [
        { name: 'iPhone 15 Pro', stock: 125, status: 'in-stock', reorder: 50 },
        { name: 'MacBook Air M2', stock: 89, status: 'in-stock', reorder: 30 },
        { name: 'Samsung Galaxy S24', stock: 67, status: 'in-stock', reorder: 40 },
        { name: 'AirPods Pro', stock: 12, status: 'low-stock', reorder: 100 },
        { name: 'iPad Air', stock: 0, status: 'out-of-stock', reorder: 75 },
        { name: 'Apple Watch Series 9', stock: 34, status: 'in-stock', reorder: 25 }
    ],
    
    // Recent Activity
    recentActivity: [
        { type: 'order', title: 'New Order #TM-2024-001', description: 'Customer: Sarah Johnson - iPhone 15 Pro + AirPods Pro', amount: 1299, time: '2 hours ago' },
        { type: 'customer', title: 'New Customer Registration', description: 'Michael Chen - Premium Account', amount: null, time: '4 hours ago' },
        { type: 'inventory', title: 'Low Stock Alert', description: 'AirPods Pro - Only 12 units remaining', amount: null, time: '6 hours ago' },
        { type: 'sales', title: 'Sales Target Achieved', description: 'Monthly target exceeded by 18.7%', amount: null, time: '1 day ago' },
        { type: 'order', title: 'Bulk Order #TM-2024-002', description: 'Corporate Client: TechCorp Inc - 50 MacBook Air M2', amount: 122500, time: '2 days ago' }
    ],
    
    // Business Metrics
    metrics: {
        websiteTraffic: 125000,
        conversionRate: 3.2,
        averageSessionDuration: 245,
        cartAbandonmentRate: 68.5,
        customerSatisfaction: 4.6,
        returnRate: 2.8
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    setupNavigation();
    setupCharts();
    setupEventListeners();
    updateKPIs();
    updateBusinessData();
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.dashboard-section');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            this.classList.add('active');
            
            const targetSection = this.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
            }
        });
    });
}

function setupCharts() {
    setupRevenueChart();
    setupSalesChart();
    setupRegionChart();
    setupMonthlyRevenueChart();
    setupRevenueSourcesChart();
    setupDemographicsChart();
    setupCLVChart();
    setupCategoriesChart();
}

function setupRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: businessData.monthlyRevenue.labels,
            datasets: [{
                label: 'Revenue',
                data: businessData.monthlyRevenue.data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function setupSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: businessData.salesChannels.labels,
            datasets: [{
                data: businessData.salesChannels.data,
                backgroundColor: businessData.salesChannels.colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function setupRegionChart() {
    const ctx = document.getElementById('regionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: businessData.regionalSales.labels,
            datasets: [{
                label: 'Sales',
                data: businessData.regionalSales.data,
                backgroundColor: businessData.regionalSales.colors,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function setupMonthlyRevenueChart() {
    const ctx = document.getElementById('monthlyRevenueChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: businessData.monthlyRevenue.labels,
            datasets: [{
                label: 'Revenue',
                data: businessData.monthlyRevenue.data,
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function setupRevenueSourcesChart() {
    const ctx = document.getElementById('revenueSourcesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: businessData.revenueSources.labels,
            datasets: [{
                data: businessData.revenueSources.data,
                backgroundColor: businessData.revenueSources.colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function setupDemographicsChart() {
    const ctx = document.getElementById('demographicsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: businessData.customerDemographics.age.labels,
            datasets: [{
                data: businessData.customerDemographics.age.data,
                backgroundColor: businessData.customerDemographics.age.colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function setupCLVChart() {
    const ctx = document.getElementById('clvChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: businessData.customerLifetimeValue.labels,
            datasets: [{
                label: 'CLV',
                data: businessData.customerLifetimeValue.data,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'CLV: $' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function setupCategoriesChart() {
    const ctx = document.getElementById('categoriesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: businessData.revenueSources.labels,
            datasets: [{
                label: 'Sales',
                data: businessData.revenueSources.data,
                backgroundColor: businessData.revenueSources.colors,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function setupEventListeners() {
    const periodSelect = document.getElementById('periodSelect');
    if (periodSelect) {
        periodSelect.addEventListener('change', function() {
            updateDataForPeriod(this.value);
        });
    }

    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportDashboard);
    }

    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 1s ease';
            
            setTimeout(() => {
                icon.style.transform = 'rotate(0deg)';
                updateKPIs();
            }, 1000);
        });
    }

    const chartActions = document.querySelectorAll('.chart-actions .btn-icon');
    chartActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('title');
            handleChartAction(action, this.closest('.chart-card'));
        });
    });

    const reportButtons = document.querySelectorAll('.report-card .btn-secondary');
    reportButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            downloadReport(this.closest('.report-card').querySelector('h3').textContent);
        });
    });
}

function updateKPIs() {
    const kpiValues = document.querySelectorAll('.kpi-value');
    
    kpiValues.forEach(kpi => {
        const finalValue = kpi.textContent;
        const isCurrency = finalValue.includes('$');
        const isPercentage = finalValue.includes('%');
        
        let numericValue = parseFloat(finalValue.replace(/[$,%]/g, ''));
        
        animateValue(kpi, 0, numericValue, 2000, isCurrency, isPercentage);
    });
}

function updateBusinessData() {
    // Update KPI values with real data
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    // Total Revenue
    if (kpiCards[0]) {
        kpiCards[0].querySelector('.kpi-value').textContent = '$' + businessData.kpis.totalRevenue.toLocaleString();
    }
    
    // Total Sales
    if (kpiCards[1]) {
        kpiCards[1].querySelector('.kpi-value').textContent = businessData.kpis.totalSales.toLocaleString();
    }
    
    // New Customers
    if (kpiCards[2]) {
        kpiCards[2].querySelector('.kpi-value').textContent = businessData.kpis.newCustomers.toLocaleString();
    }
    
    // Growth Rate
    if (kpiCards[3]) {
        kpiCards[3].querySelector('.kpi-value').textContent = businessData.kpis.growthRate + '%';
    }
    
    // Update product list
    updateProductList();
    
    // Update inventory list
    updateInventoryList();
    
    // Update activity list
    updateActivityList();
}

function updateProductList() {
    const productList = document.querySelector('.product-list');
    if (!productList) return;
    
    productList.innerHTML = '';
    
    businessData.topProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <span class="product-name">${product.name}</span>
            <span class="product-sales">$${product.sales.toLocaleString()}</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(product.sales / businessData.topProducts[0].sales * 100)}%"></div>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

function updateInventoryList() {
    const inventoryList = document.querySelector('.inventory-list');
    if (!inventoryList) return;
    
    inventoryList.innerHTML = '';
    
    businessData.inventory.forEach(item => {
        const inventoryItem = document.createElement('div');
        inventoryItem.className = 'inventory-item';
        inventoryItem.innerHTML = `
            <span>${item.name}</span>
            <span class="stock-status ${item.status}">${item.status === 'in-stock' ? 'In Stock (' + item.stock + ')' : 
                                                      item.status === 'low-stock' ? 'Low Stock (' + item.stock + ')' : 
                                                      'Out of Stock'}</span>
        `;
        inventoryList.appendChild(inventoryItem);
    });
}

function updateActivityList() {
    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;
    
    activityList.innerHTML = '';
    
    businessData.recentActivity.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        let icon = '';
        switch(activity.type) {
            case 'order':
                icon = 'fas fa-shopping-cart';
                break;
            case 'customer':
                icon = 'fas fa-user-plus';
                break;
            case 'inventory':
                icon = 'fas fa-exclamation-triangle';
                break;
            case 'sales':
                icon = 'fas fa-chart-bar';
                break;
        }
        
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="${icon}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

function animateValue(element, start, end, duration, isCurrency, isPercentage) {
    const startTime = performance.now();
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = start + (end - start) * easeOutQuart;
        
        let formattedValue;
        if (isCurrency) {
            formattedValue = '$' + Math.floor(currentValue).toLocaleString();
        } else if (isPercentage) {
            formattedValue = Math.floor(currentValue) + '%';
        } else {
            formattedValue = Math.floor(currentValue).toLocaleString();
        }
        
        element.textContent = formattedValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

function updateDataForPeriod(period) {
    console.log(`Updating data for period: ${period} days`);
    showLoadingState();
    
    setTimeout(() => {
        hideLoadingState();
        updateChartsForPeriod(period);
    }, 1000);
}

function showLoadingState() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        card.style.opacity = '0.6';
    });
}

function hideLoadingState() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        card.style.opacity = '1';
    });
}

function updateChartsForPeriod(period) {
    console.log(`Charts updated for ${period}-day period`);
}

function exportDashboard() {
    const csvData = [
        ['Metric', 'Value', 'Change'],
        ['Total Revenue', '$' + businessData.kpis.totalRevenue.toLocaleString(), '+18.7%'],
        ['Total Sales', businessData.kpis.totalSales.toLocaleString(), '+12.3%'],
        ['New Customers', businessData.kpis.newCustomers.toLocaleString(), '+15.2%'],
        ['Growth Rate', businessData.kpis.growthRate + '%', '+5.1%'],
        ['Average Order Value', '$' + businessData.kpis.averageOrderValue, '+8.9%'],
        ['Customer Retention Rate', businessData.kpis.customerRetentionRate + '%', '+2.1%']
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'techmart-dashboard-export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function handleChartAction(action, chartCard) {
    switch (action) {
        case 'Download':
            downloadChart(chartCard);
            break;
        case 'Full Screen':
            openFullScreen(chartCard);
            break;
    }
}

function downloadChart(chartCard) {
    const canvas = chartCard.querySelector('canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'techmart-chart.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

function openFullScreen(chartCard) {
    if (chartCard.requestFullscreen) {
        chartCard.requestFullscreen();
    } else if (chartCard.webkitRequestFullscreen) {
        chartCard.webkitRequestFullscreen();
    } else if (chartCard.msRequestFullscreen) {
        chartCard.msRequestFullscreen();
    }
}

function downloadReport(reportType) {
    console.log(`Generating ${reportType} report for TechMart Electronics...`);
    
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;
    
    setTimeout(() => {
        const reportData = `TechMart Electronics - ${reportType}
Generated: ${new Date().toLocaleDateString()}
Company: ${businessData.company}
Industry: ${businessData.industry}

Key Metrics:
- Total Revenue: $${businessData.kpis.totalRevenue.toLocaleString()}
- Total Sales: ${businessData.kpis.totalSales.toLocaleString()}
- New Customers: ${businessData.kpis.newCustomers.toLocaleString()}
- Growth Rate: ${businessData.kpis.growthRate}%
- Average Order Value: $${businessData.kpis.averageOrderValue}

This report contains comprehensive business analytics and insights for ${businessData.company}.`;
        
        const blob = new Blob([reportData], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `techmart-${reportType.toLowerCase().replace(' ', '-')}-report.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

console.log('TechMart Electronics Dashboard initialized successfully!');

