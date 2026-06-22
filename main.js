/* =========================================
   DATA MASTER ACADEMY — MAIN JAVASCRIPT
   ========================================= */

// =========================================
// DATA — All curriculum content
// =========================================
const PHASES = [
  {
    id: 1,
    icon: "📊",
    title: "High-Dimensional Statistics & Applied Mathematical Logic",
    shortTitle: "Statistics & Logic",
    tag: "Foundation Math",
    goal: "Master the continuous probability frameworks, statistical estimation constraints, and experimental test theories that protect enterprise data pipelines from reporting false metrics.",
    color: "#4f9eff",
    topics: [
      {
        number: "1",
        title: "Descriptive Statistics & Distribution Morphologies",
        desc: "Quantifying dataset structures visually and mathematically before modeling.",
        bullets: [
          "<strong>Central Tendency & Variance Metrics:</strong> Geometric and harmonic means, trimmed variances, and standard deviation derivations.",
          "<strong>Distribution Geometry:</strong> Skewness, Kurtosis, and tracking departures from Gaussian normality across long-tailed business domains."
        ],
        courseUrl: "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9",
        courseName: "StatQuest: Statistics Fundamentals"
      },
      {
        number: "2",
        title: "Inferential Statistics & Population Estimation",
        desc: "Drawing objective, universal truths about populations from finite data samples.",
        bullets: [
          "<strong>Central Limit Theorem (CLT):</strong> The mathematical engine proving sample means converge into normal distributions regardless of the underlying population shape.",
          "<strong>Hypothesis Testing Foundations:</strong> Formulating null (H₀) and alternative (Hₐ) hypotheses, calculating Type I (α) and Type II (β) errors.",
          "<strong>The P-Value Framework:</strong> Deriving exact probability thresholds to reject or accept structural system claims without falling into p-hacking traps."
        ],
        courseUrl: "https://www.khanacademy.org/math/statistics-probability/significance-tests-one-sample",
        courseName: "Khan Academy: Hypothesis Testing and P-values"
      },
      {
        number: "3",
        title: "Parametric & Non-Parametric Frameworks",
        desc: "Selecting the precise mathematical testing grid based on sample data distribution constraints.",
        bullets: [
          "<strong>Difference Testing:</strong> Running Student's t-tests, paired t-tests, and Welch's t-test for unequal variances.",
          "<strong>Variance Auditing (ANOVA):</strong> Tracking variance ratios across multiple categorical variables simultaneously to capture global demographic trends.",
          "<strong>Non-Parametric Contingency Tables:</strong> Utilizing Chi-Square (χ²) tests to evaluate categorical distribution independences."
        ],
        courseUrl: "https://www.youtube.com/watch?v=oOuu8IBd-yo",
        courseName: "CrashCourse: Analysis of Variance (ANOVA)"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Raw Statistical Variance Engine",
        what: "A standalone calculation module written in standard Python without importing outside mathematical packages.",
        desc: "Manually process an unformatted list of raw numbers to calculate the precise variance, standard deviation, skewness, and kurtosis using pure mathematical formulas."
      },
      {
        type: "capstone",
        title: "The Marketing Variable Significance Audit",
        what: "A full-scale statistical notebook auditing user acquisition channels.",
        desc: "Import an uncleaned conversion dataset. Programmatically verify CLT boundaries, run a multi-channel ANOVA test, isolate individual feature influences using post-hoc Tukey tests, and generate a data-backed recommendation pinpointing which channel delivers statistically superior results."
      }
    ]
  },
  {
    id: 2,
    icon: "💻",
    title: "Python for Analytics & Automated Wrangling",
    shortTitle: "Python Analytics",
    tag: "Programming",
    goal: "Master the programmatic data structures, vectorized arrays, and structural string operations required to clean, parse, and automate data transformations at scale.",
    color: "#a259ff",
    topics: [
      {
        number: "1",
        title: "NumPy Vectorization & Array Operations",
        desc: "Eliminating slow loops by utilizing contiguous memory array blocks for instant computations.",
        bullets: [
          "<strong>N-Dimensional Geometry:</strong> Array creation, masking, advanced slicing, and shape manipulation.",
          "<strong>Vectorization Mechanics:</strong> Executing element-wise arithmetic across gigabyte arrays via C-level SIMD operations.",
          "<strong>Broadcasting Rules:</strong> The mathematical protocols governing operations between multi-dimensional arrays of mismatched sizes."
        ],
        courseUrl: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
        courseName: "FreeCodeCamp: NumPy Course for Data Science"
      },
      {
        number: "2",
        title: "Pandas Advanced Manipulations",
        desc: "Transforming relational data collections into high-performance structures.",
        bullets: [
          "<strong>DataFrames & Series Indices:</strong> Indexing mechanics, multi-indexing (hierarchical indexes), and fast lookups.",
          "<strong>Relational Aggregations:</strong> Mastering advanced .groupby() operations, custom .apply() transformations, and vectorized string transformations.",
          "<strong>Merging & Reshaping Frameworks:</strong> Executing left, right, inner, and outer database-style joins, alongside complex .pivot_table() and .melt() logic."
        ],
        courseUrl: "https://www.youtube.com/watch?v=vmEHCJofslg",
        courseName: "Keith Galli: Complete Python Pandas Data Science Tutorial"
      },
      {
        number: "3",
        title: "Asynchronous APIs & Dynamic Parsing",
        desc: "Automating data ingestion from modern web systems.",
        bullets: [
          "<strong>RESTful JSON Extraction:</strong> Handling multi-layered, nested API payloads via the requests library.",
          "<strong>Concurrent Execution:</strong> Utilizing asynchronous routines to harvest thousands of records without bottlenecking thread loops.",
          "<strong>String Sanitization Frameworks:</strong> Leveraging advanced Regular Expressions (Regex) to extract structured metrics from raw text strings."
        ],
        courseUrl: "https://www.youtube.com/watch?v=tb8gHvYlCFs",
        courseName: "Corey Schafer: Python Requests & API Tutorial"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Automated JSON Normalization Script",
        what: "A script that accepts highly nested JSON files containing user interactions.",
        desc: "Programmatically flatten the schema, drop duplicates, handle missing dictionary keys, and export a clean columnar CSV ready for relational database loading."
      },
      {
        type: "capstone",
        title: "Concurrent Web Ingestion & Transformation Engine",
        what: "An autonomous Python processing pipeline designed to ingest unstructured external web data.",
        desc: "Asynchronously pull live currency and product pricing metrics from multiple API endpoints, clean and format the strings using custom Regex masks, calculate instant arbitrage discrepancies across vectors in NumPy, and output a production-grade analytics ledger."
      }
    ]
  },
  {
    id: 3,
    icon: "🗄️",
    title: "Enterprise SQL & Relational Architecture",
    shortTitle: "SQL & Databases",
    tag: "Data Engineering",
    goal: "Design high-performance database queries and normalize relational schemas capable of processing millions of rows in sub-second timeframes.",
    color: "#00e5ff",
    topics: [
      {
        number: "1",
        title: "Relational Database Architecture & Normalization",
        desc: "Designing structural integrity directly into storage engines.",
        bullets: [
          "<strong>Normalization Paradigms (1NF to 3NF):</strong> Eliminating operational updates and transactional data redundancy while preserving primary and foreign key relationships.",
          "<strong>OLAP vs. OLTP Optimization:</strong> Structuring write-heavy transactional engines separate from analytical data schemas.",
          "<strong>Index Mechanics:</strong> Accelerating query lookups using B-Tree and Hash indexes to avoid costly sequential table scans."
        ],
        courseUrl: "https://www.youtube.com/playlist?list=PLPpAv5nCgmv9n6KXL-RkFAtidxWpFCq0z",
        courseName: "Dr. Daniel Soper: Database Design and Normalization"
      },
      {
        number: "2",
        title: "Advanced Query Ingestion & Analytical SQL",
        desc: "Writing complex queries to extract deep situational intelligence.",
        bullets: [
          "<strong>Advanced Joins & Filtering:</strong> Cross-joins, self-joins, anti-joins, and complex conditional matching via multi-stage subqueries.",
          "<strong>Window Function Mastery:</strong> Utilizing RANK(), DENSE_RANK(), LEAD(), LAG(), and cumulative SUM() OVER() parameters to extract step-by-step trends.",
          "<strong>Common Table Expressions (CTEs):</strong> Writing clean, modular, and maintainable data retrieval logic using recursive and non-recursive WITH clauses."
        ],
        courseUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        courseName: "FreeCodeCamp: Advanced SQL Masterclass"
      },
      {
        number: "3",
        title: "Query Optimization & Transaction Control",
        desc: "Analyzing performance profiles to drastically reduce database computing overhead.",
        bullets: [
          "<strong>Execution Plan Auditing:</strong> Utilizing EXPLAIN ANALYZE commands to isolate bottlenecks, bad joins, and indexing gaps.",
          "<strong>ACID Compliance Engine:</strong> Managing data transaction blocks using COMMIT, ROLLBACK, and database isolation locks."
        ],
        courseUrl: "https://www.youtube.com/watch?v=BHwzDmr6d7s",
        courseName: "Hussein Nasser: SQL Query Optimization & Execution Plans"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "The Multi-Layer Window Ledger",
        what: "A clean SQL script built to isolate dynamic customer transactions.",
        desc: "Track historical customer sales records, calculating user month-over-month expenditure variances and ranking top spenders using pure window metrics."
      },
      {
        type: "capstone",
        title: "The Normalized E-Commerce Ledger & Analytical Schema",
        what: "A production-grade relational analytical schema built from raw transaction logs.",
        desc: "Convert a massive, single-table flat file into a fully normalized, index-optimized 3NF database. Write a master analytical CTE pipeline that extracts running metrics including user-level rolling 30-day customer retention rates, lifetime value calculations, and time-lapse intervals between sequential purchases."
      }
    ]
  },
  {
    id: 4,
    icon: "🎨",
    title: "Data Visualization & Executive Storytelling",
    shortTitle: "Visualization",
    tag: "Business Intelligence",
    goal: "Apply rigorous cognitive design laws and interactive dashboards to convert complex technical trends into definitive strategic decisions.",
    color: "#ff4fcb",
    topics: [
      {
        number: "1",
        title: "Cognitive Design & Chart Selection Laws",
        desc: "Mapping visual displays perfectly to human perceptual capabilities.",
        bullets: [
          "<strong>Preattentive Attributes:</strong> Leveraging color, size, contrast, and spatial alignment to guide executive focus to key metrics instantly.",
          "<strong>Data-to-Ink Maximization:</strong> Eliminating gridlines, chartjunk, and decorative elements to prioritize core insights.",
          "<strong>Visual Mappings:</strong> Selecting the correct chart type based on analytical goals — box plots for variation distribution, slope graphs for rate changes."
        ],
        courseUrl: "https://www.youtube.com/watch?v=BL1JDhKiDmU",
        courseName: "Storytelling with Data: Visualizing Data for Human Brains"
      },
      {
        number: "2",
        title: "Enterprise BI Implementation (Power BI / Tableau)",
        desc: "Architecting interactive corporate dashboard infrastructure.",
        bullets: [
          "<strong>Data Modeling in BI:</strong> Structuring efficient star schemas, creating one-to-many relationships, and managing bi-directional filtering.",
          "<strong>Calculated Measure Engines:</strong> Programming complex functional expressions (DAX / Tableau Calculated Fields) to compute dynamic rolling business averages.",
          "<strong>User Interface Engineering:</strong> Designing interactive dashboards with drill-downs, parameter switches, and cross-highlighting filters."
        ],
        courseUrl: "https://www.youtube.com/watch?v=TmhQCQr_aIM",
        courseName: "Avi Singh: Power BI Enterprise Data Modeling Masterclass"
      },
      {
        number: "3",
        title: "The Pyramid Principle & Stakeholder Persuasion",
        desc: "Structuring business communications to quickly drive strategic alignment.",
        bullets: [
          "<strong>Top-Down Communication:</strong> Leading with the core strategic conclusion before detailing supporting evidence.",
          "<strong>Executive Framing:</strong> Translating technical data metrics (like click-through rates) into the financial vocabulary of revenue and ROI."
        ],
        courseUrl: "https://www.youtube.com/watch?v=pGdQvBjSB3U",
        courseName: "Firm Learning: The Minto Pyramid Principle"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "The Static Distribution Visualizer Portfolio",
        what: "A clean statistical dashboard focused on variable variance.",
        desc: "Using Python's Seaborn to map complex product performance metrics and statistical distributions into a publishable visualization portfolio."
      },
      {
        type: "capstone",
        title: "The Global Executive Operational Cockpit",
        what: "An enterprise-grade, multi-page interactive dashboard connected to a live relational database.",
        desc: "Implement a star-schema architecture inside Power BI/Tableau. Build custom calculated measures (DAX) for dynamic year-over-year revenue retention, regional sales variances, and moving operational cost averages. Design the system with structural drill-downs from global financial summaries to store-level item performance in one click."
      }
    ]
  },
  {
    id: 5,
    icon: "🔍",
    title: "Exploratory Data Analysis & Data Quality Assurance",
    shortTitle: "EDA & Quality",
    tag: "Data Science",
    goal: "Master the systematic forensic techniques required to uncover structural data anomalies, assess uncleaned feature sets, and build pure data foundations.",
    color: "#00ffb3",
    topics: [
      {
        number: "1",
        title: "Forensic Data Profiling & Structural Auditing",
        desc: "Mapping the statistical distribution of raw data before modeling.",
        bullets: [
          "<strong>Missingness Topology:</strong> Analyzing patterns in missing data to choose between dropping rows or applying mean, median, or conditional regression imputations.",
          "<strong>Outlier Classification:</strong> Identifying extreme data points using Tukey's IQR fences and Z-score boundaries, separating systemic reporting errors from true business anomalies.",
          "<strong>Multi-Collinearity Detection:</strong> Calculating Pearson, Spearman, and Kendall rank correlations to find overlapping variable dependencies."
        ],
        courseUrl: "https://www.kaggle.com/learn/data-cleaning",
        courseName: "Kaggle: Exploratory Data Analysis (EDA) Masterclass"
      },
      {
        number: "2",
        title: "Advanced Feature Engineering & Transformation",
        desc: "Reshaping raw variables into highly predictable statistical features.",
        bullets: [
          "<strong>Numerical Transformation Engines:</strong> Squashing heavily skewed data features into normal profiles using log, square root, and Box-Cox scaling transformations.",
          "<strong>Categorical Encoding Frameworks:</strong> Implementing one-hot encoding, ordinal ranking schemes, and target encoding methods without introducing data leakage.",
          "<strong>Dimensionality Consolidation:</strong> Compressing vast feature sets into primary directional vectors using Principal Component Analysis (PCA)."
        ],
        courseUrl: "https://www.youtube.com/watch?v=FgakZw6K1QQ",
        courseName: "StatQuest: Principal Component Analysis (PCA) Clearly Explained"
      },
      {
        number: "3",
        title: "Automated Data Quality Assurance (DQA)",
        desc: "Programming automated checks to enforce data integrity across production pipelines.",
        bullets: [
          "<strong>Schema Enforcement:</strong> Writing validation protocols to intercept data type mismatches, value constraint breaches, and structural anomalies."
        ],
        courseUrl: "https://www.youtube.com/watch?v=iYie42M1ZyU",
        courseName: "DataSchool: Data Cleaning and Verification in Python"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Missingness Imputation Notebook",
        what: "A Python script designed to diagnose data holes inside an uncleaned user registration matrix.",
        desc: "Apply conditional median imputation across missing fields, generate a missingness heatmap, and document imputation logic in a reproducible Jupyter notebook."
      },
      {
        type: "capstone",
        title: "The Enterprise Data Profiling & Automated Sanitization Suite",
        what: "An end-to-end data cleaning pipeline that profiles and repairs chaotic real-world transaction logs.",
        desc: "Programmatically detect multi-collinearity, handle outliers using custom IQR filters, impute missing parameters using data-driven logic, scale highly skewed metrics using Box-Cox, and generate an automated, audit-ready data health report detailing every transformation step."
      }
    ]
  },
  {
    id: 6,
    icon: "📈",
    title: "Time-Series Analysis & Predictive Forecasting",
    shortTitle: "Time-Series",
    tag: "Predictive Analytics",
    goal: "Isolate chronological trends, decompose multi-layered seasonality, and deploy predictive forecasting models to optimize future operations.",
    color: "#ff8c42",
    topics: [
      {
        number: "1",
        title: "Time-Series Structural Decomposition",
        desc: "Breaking down sequential data points into their core statistical drivers.",
        bullets: [
          "<strong>Component Separation:</strong> Splitting raw historical data into long-term secular trends, cyclical variations, repeating seasonal pulses, and white-noise residuals.",
          "<strong>Stationarity Audits:</strong> Evaluating mean and variance stability over time using the Augmented Dickey-Fuller (ADF) test, applying sequence differencing where necessary.",
          "<strong>Autocorrelation Mechanics:</strong> Diagnosing temporal lags and dependencies using Autocorrelation Functions (ACF) and Partial Autocorrelation Functions (PACF)."
        ],
        courseUrl: "https://www.youtube.com/playlist?list=PLvcbYUQ5t0UHOLnBzl46_Q6QKtFgfMGc3",
        courseName: "ritvikmath: Time Series Analysis Fundamentals"
      },
      {
        number: "2",
        title: "Classical Forecasting Architectures",
        desc: "Deploying robust statistical models for linear time-dependent forecasting.",
        bullets: [
          "<strong>ARIMA Frameworks:</strong> Tuning Autoregressive (p), Integrated (d), and Moving Average (q) parameters to capture immediate trends.",
          "<strong>SARIMAX Implementation:</strong> Extending forecasting models to include structural seasonal components and external macroeconomic variables.",
          "<strong>Exponential Smoothing (ETS):</strong> Mapping changing parameters using Holt-Winters additive and multiplicative trend variations."
        ],
        courseUrl: "https://otexts.com/fpp3/",
        courseName: "Forecasting: Principles and Practice (Rob J Hyndman)"
      },
      {
        number: "3",
        title: "Forecast Validation Metrics",
        desc: "Quantifying model reliability for business planning.",
        bullets: [
          "<strong>Error Scoring Systems:</strong> Evaluating forecasting performance using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and Mean Absolute Percentage Error (MAPE).",
          "<strong>Backtesting Pipelines:</strong> Implementing rolling time-series cross-validation splits to verify model performance across historical data windows."
        ],
        courseUrl: "https://www.youtube.com/watch?v=5k-TsW1-8E0",
        courseName: "Krish Naik: Time Series Forecasting Evaluation Metrics"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Autocorrelation Diagnostic Script",
        what: "A Python module analyzing raw data patterns to test stationarity.",
        desc: "Test stationarity, difference the data, and map time lag signatures using ACF and PACF plots — generating visual diagnostics for model parameter selection."
      },
      {
        type: "capstone",
        title: "The Multi-Store Operational Inventory Demand Forecaster",
        what: "A predictive forecasting pipeline built to automate inventory planning across multiple locations.",
        desc: "Ingest historical store sales logs, clean seasonal anomalies, run automated ADF tests to stabilize variance, fit optimized SARIMAX models that account for holiday promotions, evaluate accuracy using rolling validation loops, and generate a 90-day inventory report that minimizes stockouts and carrying costs."
      }
    ]
  },
  {
    id: 7,
    icon: "🏗️",
    title: "Analytics Engineering & Modern Cloud Pipelines",
    shortTitle: "Cloud Pipelines",
    tag: "Cloud Engineering",
    goal: "Transition from local script execution to cloud data architectures, building scalable ETL/ELT pipelines using modern cloud data warehouses.",
    color: "#4f9eff",
    topics: [
      {
        number: "1",
        title: "The Modern Data Stack & Analytical Engineering",
        desc: "Structuring clear divisions between raw ingestion engines and analytics-ready schemas.",
        bullets: [
          "<strong>ELT Ingestion Paradigms:</strong> Extracting and loading raw data directly into central cloud environments before transforming it, minimizing pipeline compute costs.",
          "<strong>Analytics Engineering with dbt:</strong> Writing modular, version-controlled SQL transformation models within a dbt (Data Build Tool) ecosystem.",
          "<strong>Idempotent Pipeline Design:</strong> Ensuring data tasks can be run repeatedly without causing duplication or state corruption."
        ],
        courseUrl: "https://courses.getdbt.com/courses/fundamentals",
        courseName: "dbt Labs: dbt Fundamentals Official Course"
      },
      {
        number: "2",
        title: "Cloud Data Warehousing Architectures",
        desc: "Optimizing cloud storage layers for fast query execution at scale.",
        bullets: [
          "<strong>Columnar Storage Engines:</strong> Comparing column-oriented storage mechanisms (Google BigQuery, Snowflake) against row-oriented databases.",
          "<strong>Partitioning & Clustering Strategy:</strong> Partitioning tables by date and clustering by high-frequency keys to reduce scan volume and cloud computing costs."
        ],
        courseUrl: "https://www.youtube.com/watch?v=d3MDxC_iuaw",
        courseName: "Google Cloud Tech: Google BigQuery Architecture and Optimization"
      },
      {
        number: "3",
        title: "Workflow Orchestration Foundations",
        desc: "Automating data pipelines to guarantee reliable dashboard delivery.",
        bullets: [
          "<strong>Directed Acyclic Graphs (DAGs):</strong> Structuring chronological execution paths, task dependencies, and error-handling steps using modern orchestrators (Apache Airflow or Prefect)."
        ],
        courseUrl: "https://www.youtube.com/watch?v=lqDMnBAmG3I",
        courseName: "DataTalksClub: Data Engineering Zoomcamp - Airflow"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Cloud Storage Sync Python Script",
        what: "An automated script designed to process and upload incoming CSV batch files.",
        desc: "Upload incoming CSV batch files into an AWS S3 or Google Cloud Storage bucket with automated naming conventions, deduplication checks, and success/failure logging."
      },
      {
        type: "capstone",
        title: "The Automated Live Analytics Cloud Warehouse Pipeline",
        what: "A production-grade data pipeline that automates ingestion, modeling, and reporting.",
        desc: "Build an Apache Airflow DAG that orchestrates data movement. Extract untransformed transactional data via an API, load it raw into a partitioned Google BigQuery database, execute automated dbt transformation loops to construct clean analytical models, run data validation tests to check for null values, and automatically trigger a refresh on connected executive dashboards."
      }
    ]
  },
  {
    id: 8,
    icon: "🧪",
    title: "Experimental Design & Production A/B Testing",
    shortTitle: "A/B Testing",
    tag: "Experimentation",
    goal: "Establish scientific experimental frameworks inside production ecosystems to measure the exact business impact of changes without bias.",
    color: "#a259ff",
    topics: [
      {
        number: "1",
        title: "Statistical Power & Sample Size Architecture",
        desc: "Calculating experimental guardrails before launching live tests.",
        bullets: [
          "<strong>Statistical Power (1 - β):</strong> Designing tests to confidently detect true business improvements while minimizing false negatives.",
          "<strong>Effect Size Selection:</strong> Using Cohen's d to define the Minimum Detectable Effect (MDE) required to justify product changes financially.",
          "<strong>Sample Size Calculations:</strong> Performing pre-test power analysis to calculate the exact user sample size needed before stopping an experiment."
        ],
        courseUrl: "https://www.udacity.com/course/ab-testing--ud257",
        courseName: "Udacity / Google: A/B Testing Master Course"
      },
      {
        number: "2",
        title: "Experimental Execution Risks & Safeguards",
        desc: "Protecting live web tests from statistical distortion.",
        bullets: [
          "<strong>Peeking Pitfalls & Sequential Adjustments:</strong> Preventing inflated false positive rates caused by checking results mid-experiment without statistical corrections.",
          "<strong>Sample Ratio Mismatch (SRM):</strong> Running Chi-Square (χ²) checks to ensure the actual distribution of users matches the intended 50/50 split, flagging assignment bias instantly.",
          "<strong>Network Isolation:</strong> Minimizing spillover effects where actions in the treatment group alter control group behaviors."
        ],
        courseUrl: "https://online.stanford.edu/courses/stats216-introduction-statistical-learning",
        courseName: "Stanford University: Statistical Methods for Experimental Design"
      },
      {
        number: "3",
        title: "Multi-Armed Bandits & Advanced Continuous Evaluation",
        desc: "Optimizing traffic distribution dynamically during live testing loops.",
        bullets: [
          "<strong>Exploitation vs. Exploration:</strong> Using epsilon-greedy and Thompson Sampling algorithms to shift user traffic toward the winning variant during the test."
        ],
        courseUrl: "https://www.youtube.com/watch?v=e3L4VocZnnQ",
        courseName: "Yannic Kilcher: Multi-Armed Bandits Explained"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Sample Size Calculator Script",
        what: "A command-line Python script that computes user sample targets.",
        desc: "Computes user sample targets based on custom alpha, power, baseline conversion rates, and desired MDE — with an interactive prompt and formatted output table."
      },
      {
        type: "capstone",
        title: "The Production A/B Testing Experimentation & SRM Audit Suite",
        what: "An experimental data notebook running diagnostic audits on active web variant tests.",
        desc: "Import daily conversion tracking streams, execute automated SRM tests to flag traffic assignment anomalies, calculate rolling p-values using Bonferroni corrections to prevent peeking inflation, compute confidence intervals around the uplift delta, and generate an evaluation report recommending whether to deploy or scrap the new feature."
      }
    ]
  },
  {
    id: 9,
    icon: "🏢",
    title: "Financial Acumen, Strategy & Data Governance",
    shortTitle: "Finance & Strategy",
    tag: "Business Strategy",
    goal: "Connect technical data patterns to corporate financial health, driving strategic decisions while safeguarding data integrity.",
    color: "#00ffb3",
    topics: [
      {
        number: "1",
        title: "Corporate Financial Architecture & Unit Economics",
        desc: "Translating analytical metrics into the core metrics tracked by the board and investors.",
        bullets: [
          "<strong>P&L Statement Integration:</strong> Linking product optimization steps directly to revenue growth and EBITDA impact.",
          "<strong>Unit Economics Frameworks:</strong> Modeling Customer Acquisition Cost (CAC) against Customer Lifetime Value (LTV) to evaluate long-term business health.",
          "<strong>Retention Economics:</strong> Quantifying the cash-flow impact of reducing customer churn across different cohorts over a 12-month timeline."
        ],
        courseUrl: "https://www.youtube.com/watch?v=wBdJcBzBbSA",
        courseName: "Columbia Business School: Corporate Finance Masterclass"
      },
      {
        number: "2",
        title: "Metric Framework Design & Data Governance",
        desc: "Establishing corporate tracking systems and protecting them.",
        bullets: [
          "<strong>Hierarchical Metrics:</strong> Designing an operational tree that connects granular team metrics to a single company-wide North Star metric.",
          "<strong>Data Lineage & Privacy:</strong> Tracking data origins, managing PII (Personally Identifiable Information), and aligning with GDPR/CCPA standards."
        ],
        courseUrl: "https://www.nist.gov/privacy-framework",
        courseName: "NIST Privacy & Data Governance Frameworks"
      },
      {
        number: "3",
        title: "Strategic Persuasion & Stakeholder Management",
        desc: "Guiding corporate strategy when executives hold opposing opinions.",
        bullets: [
          "<strong>Managing Conflicting Demands:</strong> Navigating biased reporting requests by enforcing standardized data verification protocols.",
          "<strong>Influence Without Authority:</strong> Bridging the gap between the engineering team and the sales/marketing leadership."
        ],
        courseUrl: "https://hbr.org/2020/01/build-a-data-driven-company",
        courseName: "Harvard Business Review: Executing Strategic Data Strategy"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Cohort LTV Prediction Ledger",
        what: "A financial modeling template that maps historical user retention data.",
        desc: "Project future cohort revenue streams against acquisition costs — building a clean spreadsheet model with cohort-based retention curves and NPV analysis."
      },
      {
        type: "capstone",
        title: "The Corporate Strategic Growth Pivot Advisory Proposal",
        what: "A comprehensive corporate business strategy dossier designed for executive leadership.",
        desc: "Model unit economic trends to show how a 2.5% drop in customer churn impacts long-term EBITDA. Structure a complete presentation deck using the Minto Pyramid Principle to recommend a major strategic shift in product focus. Include a Data Governance addendum mapping out exactly how PII will be protected during the new initiative."
      }
    ]
  },
  {
    id: 10,
    icon: "🤖",
    title: "AI-Augmented Analytics & Advanced Cluster Mining",
    shortTitle: "AI & ML Analytics",
    tag: "Machine Learning",
    goal: "Combine traditional business analysis with advanced statistical machine learning to extract deep user personas, isolate anomalies, and scale reporting speed.",
    color: "#ff4fcb",
    topics: [
      {
        number: "1",
        title: "Unsupervised Segmentation & Persona Mining",
        desc: "Grouping vast user bases into distinct behavior profiles without manual labeling.",
        bullets: [
          "<strong>K-Means Clustering Optimization:</strong> Isolating optimal cluster counts using the Elbow Method and Silhouette Analysis.",
          "<strong>Feature Scale Standardization:</strong> Normalizing mixed distance properties using Scikit-Learn's StandardScaler to protect mathematical distance calculations."
        ],
        courseUrl: "https://www.youtube.com/watch?v=4b5d3muPQmA",
        courseName: "StatQuest: K-Means and Hierarchical Clustering"
      },
      {
        number: "2",
        title: "Statistical Anomaly & Churn Diagnostics",
        desc: "Building automated systems to catch operational errors and identify user churn early.",
        bullets: [
          "<strong>Isolation Forests & Distance Anomaly Metrics:</strong> Training models to instantly flag fraudulent entries, API drops, or systemic recording issues.",
          "<strong>Logistic Regression Drivers:</strong> Evaluating odds-ratios inside classification models to isolate the top variables causing customer churn."
        ],
        courseUrl: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
        courseName: "Stanford CS229: Machine Learning Supervised Learning Core"
      },
      {
        number: "3",
        title: "Generative AI Engineering for Analysts",
        desc: "Leveraging Large Language Models safely to accelerate reporting workflows.",
        bullets: [
          "<strong>Automated Query Generation:</strong> Engineering structured prompts to generate, optimize, and document complex nested SQL queries.",
          "<strong>API Synthesis Integration:</strong> Connecting Python scripts to LLM APIs (OpenAI/Anthropic) to categorize and summarize qualitative text feedback at scale."
        ],
        courseUrl: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
        courseName: "Andrej Karpathy: Intro to Large Language Models"
      }
    ],
    projects: [
      {
        type: "foundation",
        title: "Customer Clustering Notebook",
        what: "A Scikit-Learn script that scales data, applies K-Means, and groups customer data.",
        desc: "Group customer data into distinct, clean behavior cohorts for marketing — with elbow method visualization, silhouette scores, and cluster profile summaries."
      },
      {
        type: "capstone",
        title: "The AI-Driven Anomaly Detection & Churn Diagnostic Engine",
        what: "An advanced analytics application that automatically monitors operational health and flags customer churn risks.",
        desc: "Implement an Isolation Forest model to detect data anomalies in incoming logs. Run a logistic regression pipeline to identify the primary numerical drivers of user churn, use an LLM API to summarize qualitative customer complaints from unstructured text columns, and output an automated dashboard that flags at-risk accounts with targeted retention strategies."
      }
    ]
  }
];

const TIMELINE = [
  {
    milestone: 1,
    title: "The Foundation",
    phases: "Phases 1–3",
    duration: "Months 1–6",
    objective: "Math, SQL, and Python. Transitioning from zero to competent Data Worker capable of building backend logic.",
    icon: "🧱",
    color: "#4f9eff"
  },
  {
    milestone: 2,
    title: "The Analyst Skillset",
    phases: "Phases 4–6",
    duration: "Months 7–14",
    objective: "Visualization, EDA, and Time Series. Building the mechanisms to map historical data to future predictions.",
    icon: "📊",
    color: "#a259ff"
  },
  {
    milestone: 3,
    title: "Enterprise Scale",
    phases: "Phases 7–8",
    duration: "Months 15–18",
    objective: "Analytics Engineering and A/B Testing. Designing cloud warehouse pipelines and scientific test architecture.",
    icon: "🏗️",
    color: "#00e5ff"
  },
  {
    milestone: 4,
    title: "The Strategist",
    phases: "Phases 9–10",
    duration: "Months 19–24",
    objective: "Financial Acumen and AI Integration. Stepping into the Senior role: clustering algorithms, LLM synthesis, and boardroom advisory.",
    icon: "🎯",
    color: "#ff4fcb"
  }
];

const DIRECTIVES = [
  {
    number: "01",
    label: "Law 1 — Repository First",
    title: "The 'Repository First' Rule",
    desc: "You are not allowed to claim you have finished a Phase until both the Foundation Project and Master Capstone Project are fully coded, pushed to a public GitHub repository, and documented with a professional README.",
    highlight: "Your GitHub is your resume."
  },
  {
    number: "02",
    label: "Law 2 — Daily Study Discipline",
    title: "The 'Two-Pass' Daily Study Routine",
    desc: "Spend 40% of your time watching the Master Course Links taking conceptual notes. Spend 60% of your time with the video closed, writing the SQL queries or Python code from scratch in your IDE, debugging the errors manually.",
    highlight: "40% consume → 60% build. Passive watching doesn't build skills."
  },
  {
    number: "03",
    label: "Law 3 — The Analyst Oath",
    title: "The Principal Analyst Oath",
    desc: "Data is the evidence, not the answer. Precision is trust. Every insight must pass the 'So What?' test by affecting the bottom line.",
    highlight: "Simplify to amplify. If you can't explain it simply, you don't understand it well enough."
  }
];

// =========================================
// ROUTER / SPA ENGINE
// =========================================
const Router = {
  currentPage: 'home',

  navigate(page, params = {}) {
    this.currentPage = page;
    this.params = params;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
  },

  render() {
    const main = document.getElementById('main-view');
    switch (this.currentPage) {
      case 'home':      main.innerHTML = renderHome(); break;
      case 'phase':     main.innerHTML = renderPhasePage(this.params.id); break;
      case 'projects':  main.innerHTML = renderProjectsPage(this.params.id); break;
      case 'timeline':  main.innerHTML = renderTimelinePage(); break;
      case 'strategy':  main.innerHTML = renderStrategyPage(); break;
      case 'guide':     main.innerHTML = renderGuidePage(); break;
      case 'about':     main.innerHTML = renderAboutPage(); break;
      default:          main.innerHTML = renderHome();
    }
    attachEventListeners();
    initRevealAnimation();
  }
};

// =========================================
// RENDER FUNCTIONS
// =========================================

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-eyebrow">
        <span class="hero-eyebrow-dot"></span>
        Zero to Principal Data Analyst
      </div>
      <h1 class="hero-title">
        <span class="line-gradient">Master Data Analysis</span>
        <span class="line-white">at Industry Level</span>
      </h1>
      <p class="hero-subtitle">
        The definitive, uncompressed, 100% complete curriculum from raw statistics to AI-augmented analytics — 
        structured across 10 phases and engineered for professionals who demand results.
      </p>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="hero-stat-value">10</span>
          <span class="hero-stat-label">Phases</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">24</span>
          <span class="hero-stat-label">Months</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">20+</span>
          <span class="hero-stat-label">Projects</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">∞</span>
          <span class="hero-stat-label">Career ROI</span>
        </div>
      </div>
      <div class="hero-cta">
        <button class="btn-primary" onclick="Router.navigate('phase', {id: 1})">
          🚀 Begin Phase 1
        </button>
        <button class="btn-secondary" onclick="Router.navigate('guide')">
          📖 How to Use This
        </button>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        SCROLL TO EXPLORE
      </div>
    </section>

    <section class="phases-section">
      <div class="section-header reveal">
        <span class="section-eyebrow">The Curriculum</span>
        <h2 class="section-title">10 Phases. Zero Fluff.</h2>
        <p class="section-subtitle">Each phase builds on the last — from mathematical foundations to AI-powered enterprise analytics.</p>
      </div>
      <div class="phases-grid">
        ${PHASES.map(p => `
          <a class="phase-card" onclick="Router.navigate('phase', {id: ${p.id}})" href="javascript:void(0)">
            <div class="phase-card-glow"></div>
            <div class="phase-number">Phase ${String(p.id).padStart(2,'0')}</div>
            <span class="phase-icon">${p.icon}</span>
            <div class="phase-title">${p.shortTitle}</div>
            <div class="phase-desc">${p.goal.substring(0, 90)}…</div>
            <span class="phase-tag">${p.tag}</span>
            <div class="phase-arrow">→</div>
          </a>
        `).join('')}
      </div>
    </section>

    <section style="max-width:900px;margin:0 auto;padding:0 24px;">
      <div class="section-header reveal">
        <span class="section-eyebrow">Your Journey</span>
        <h2 class="section-title">Plan. Execute. Transform.</h2>
      </div>
    </section>

    <div class="bottom-actions">
      <a class="big-action-card" onclick="Router.navigate('timeline')" href="javascript:void(0)">
        <div class="big-action-icon">🗓️</div>
        <div class="big-action-title">24-Month Master Timeline</div>
        <div class="big-action-desc">The exact milestone roadmap from zero to Principal Data Analyst — broken into four strategic milestones.</div>
        <div class="big-action-btn">View Full Timeline →</div>
      </a>
      <a class="big-action-card" onclick="Router.navigate('strategy')" href="javascript:void(0)">
        <div class="big-action-icon">⚡</div>
        <div class="big-action-title">Execution Directives</div>
        <div class="big-action-desc">The three non-negotiable laws that separate analysts who reach the top from those who plateau permanently.</div>
        <div class="big-action-btn">Read The Directives →</div>
      </a>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>The Ultimate Zero-to-Architect Data Analyst Curriculum</p>
      <p style="margin-top:8px;">Built for engineers who refuse to be average.</p>
    </footer>
  `;
}

function renderPhasePage(id) {
  const phase = PHASES.find(p => p.id === id);
  if (!phase) return '<p style="padding:40px">Phase not found.</p>';

  return `
    <div class="page-hero">
      <button class="back-btn" onclick="Router.navigate('home')">
        ← Back to All Phases
      </button>
      <div class="phase-hero-tag">
        <span>${phase.icon}</span>
        Phase ${String(phase.id).padStart(2,'0')} · ${phase.tag}
      </div>
      <h1 class="phase-hero-title">
        <span>${phase.title}</span>
      </h1>
      <div class="phase-hero-goal">${phase.goal}</div>
    </div>

    <div class="topics-container">
      ${phase.topics.map((t, i) => `
        <div class="topic-card reveal" style="animation-delay:${i * 0.1}s">
          <div class="topic-number">Topic ${t.number}</div>
          <div class="topic-title">${t.title}</div>
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;line-height:1.6;">${t.desc}</p>
          <ul class="topic-bullets">
            ${t.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <a class="learn-btn" href="${t.courseUrl}" target="_blank" rel="noopener">
            <span class="learn-btn-icon">▶</span>
            Start Learning — ${t.courseName}
          </a>
        </div>
      `).join('')}
    </div>

    <div style="padding:0 32px;max-width:900px;margin:0 auto 20px;">
      <div class="projects-section-btn reveal" onclick="Router.navigate('projects', {id: ${phase.id}})">
        <div class="projects-btn-left">
          <div class="projects-btn-icon">🛠️</div>
          <div>
            <div class="projects-btn-title">Phase ${phase.id} Projects</div>
            <div class="projects-btn-sub">1 Foundation Project · 1 Master Capstone</div>
          </div>
        </div>
        <div class="projects-btn-arrow">→</div>
      </div>
    </div>

    <div style="max-width:900px;margin:0 auto;padding:20px 32px 60px;display:flex;gap:12px;flex-wrap:wrap;">
      ${phase.id > 1 ? `<button class="btn-secondary" onclick="Router.navigate('phase', {id: ${phase.id - 1}})">← Phase ${phase.id - 1}</button>` : ''}
      ${phase.id < 10 ? `<button class="btn-primary" onclick="Router.navigate('phase', {id: ${phase.id + 1}})">Phase ${phase.id + 1} →</button>` : ''}
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>Phase ${phase.id} of 10 · ${phase.tag}</p>
    </footer>
  `;
}

function renderProjectsPage(id) {
  const phase = PHASES.find(p => p.id === id);
  if (!phase) return '<p style="padding:40px">Phase not found.</p>';

  return `
    <div class="page-hero">
      <button class="back-btn" onclick="Router.navigate('phase', {id: ${phase.id}})">
        ← Back to Phase ${phase.id}
      </button>
      <div class="phase-hero-tag">🛠️ Phase ${phase.id} Projects</div>
      <h1 class="phase-hero-title">
        <span>${phase.shortTitle}</span> Projects
      </h1>
      <div class="phase-hero-goal">Build. Push. Document. These projects are your proof of competence — not exercises, deliverables.</div>
    </div>

    <div class="projects-grid">
      ${phase.projects.map((proj, i) => `
        <div class="project-card ${proj.type} reveal" style="animation-delay:${i * 0.15}s">
          <div class="project-badge ${proj.type}">
            ${proj.type === 'foundation' ? '🏗 Foundation Project' : '🎯 Master Capstone'}
          </div>
          <div class="project-title">${proj.title}</div>
          <div class="project-what">What it is:</div>
          <p class="project-desc" style="font-size:14px;margin-bottom:8px;">${proj.what}</p>
          <div class="project-what">What it should do:</div>
          <p class="project-desc">${proj.desc}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">
            <button class="learn-btn" onclick="alert('Open your IDE and start building! Push your code to GitHub when complete.')">
              💻 Start Building
            </button>
          </div>
        </div>
      `).join('')}
    </div>

    <div style="max-width:900px;margin:0 auto;padding:0 32px 80px;">
      <div style="background:linear-gradient(135deg,rgba(79,158,255,0.06),rgba(162,89,255,0.08));border:1px solid rgba(79,158,255,0.18);border-radius:var(--radius-lg);padding:28px;text-align:center;" class="reveal">
        <div style="font-size:28px;margin-bottom:12px;">📌</div>
        <div style="font-family:var(--font-display);font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:8px;">Repository First Rule</div>
        <div style="font-size:14px;color:var(--text-secondary);line-height:1.7;">Both projects must be fully coded, pushed to a public GitHub repository with a professional README before you mark this phase complete. Your GitHub is your resume.</div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>Phase ${phase.id} Projects · Build. Deploy. Document.</p>
    </footer>
  `;
}

function renderTimelinePage() {
  return `
    <div class="page-hero">
      <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
      <div class="phase-hero-tag">🗓️ Execution Plan</div>
      <h1 class="phase-hero-title">
        <span>24-Month Master</span> Timeline
      </h1>
      <div class="phase-hero-goal">The exact milestone roadmap from absolute zero to Principal/Senior Data Analyst. Follow this pacing with deliberate practice and structural synthesis.</div>
    </div>

    <div class="timeline-container">
      <div class="timeline-line"></div>
      ${TIMELINE.map((item, i) => `
        <div class="timeline-item reveal" style="animation-delay:${i * 0.15}s">
          <div class="timeline-milestone">
            <div class="timeline-dot" style="background:linear-gradient(135deg, ${item.color}, ${item.color}88);">
              ${item.milestone}
            </div>
          </div>
          <div class="timeline-content">
            <div class="timeline-phase-tags">
              <span class="timeline-tag">${item.phases}</span>
              <span class="timeline-tag" style="color:var(--accent-green);border-color:rgba(0,255,179,0.25);background:rgba(0,255,179,0.08);">
                ⏱ ${item.duration}
              </span>
            </div>
            <div class="timeline-milestone-title">${item.icon} Milestone ${item.milestone}: ${item.title}</div>
            <div class="timeline-objective">${item.objective}</div>
            <div style="margin-top:16px;">
              <button class="learn-btn" onclick="Router.navigate('phase', {id: ${(item.milestone - 1) * 3 + 1}})">
                Start ${item.phases} →
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div style="max-width:700px;margin:0 auto;padding:0 32px 80px;">
      <div style="background:linear-gradient(135deg,rgba(255,140,66,0.06),rgba(255,79,203,0.08));border:1px solid rgba(255,140,66,0.2);border-radius:var(--radius-lg);padding:32px;text-align:center;" class="reveal">
        <div style="font-size:32px;margin-bottom:12px;">⚡</div>
        <div style="font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--text-primary);margin-bottom:12px;">This is the end of the planning phase.</div>
        <div style="font-size:15px;color:var(--text-secondary);line-height:1.7;">There is nothing left to design, nothing left to search for, and nothing left to compress. Execution begins now.</div>
        <button class="btn-primary" style="margin-top:20px;" onclick="Router.navigate('phase', {id: 1})">🚀 Begin Phase 1 Now</button>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>24 Months · 4 Milestones · 10 Phases · Infinite Potential</p>
    </footer>
  `;
}

function renderStrategyPage() {
  return `
    <div class="page-hero">
      <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
      <div class="phase-hero-tag">⚡ Non-Negotiable</div>
      <h1 class="phase-hero-title">
        <span>Final Execution</span> Directives
      </h1>
      <div class="phase-hero-goal">You have the most powerful Data Analysis curriculum ever built. Do not waste it by being passive. Adhere strictly to these three laws.</div>
    </div>

    <div class="directives-container">
      ${DIRECTIVES.map((d, i) => `
        <div class="directive-card reveal" style="animation-delay:${i * 0.15}s">
          <div class="directive-number">${d.number}</div>
          <div class="directive-label">${d.label}</div>
          <div class="directive-title">${d.title}</div>
          <div class="directive-desc">${d.desc}</div>
          <div class="directive-highlight">${d.highlight}</div>
        </div>
      `).join('')}

      <div class="oath-card reveal">
        <div class="oath-title">⚔ The Principal Analyst Oath</div>
        <ul class="oath-items">
          <li>🔬 Data is the evidence, not the answer.</li>
          <li>🎯 Precision is trust.</li>
          <li>💡 Every insight must pass the "So What?" test.</li>
          <li>📉 If it doesn't affect the bottom line, it's noise.</li>
          <li>🚀 Simplify to amplify.</li>
        </ul>
        <button class="btn-primary" onclick="Router.navigate('phase', {id: 1})">Begin Your Journey →</button>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>Strategy without execution is hallucination.</p>
    </footer>
  `;
}

function renderGuidePage() {
  return `
    <div class="page-hero">
      <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
      <div class="phase-hero-tag">📖 Getting Started</div>
      <h1 class="phase-hero-title">
        <span>How to Use</span> This Curriculum
      </h1>
      <div class="phase-hero-goal">A step-by-step guide to extracting maximum value from this system — used efficiently, this curriculum will transform your career in 24 months.</div>
    </div>

    <div class="guide-container">
      ${[
        {
          title: "Start with the Overview",
          desc: "Before diving into a phase, read the goal statement at the top of each phase page. This frames your mindset before you consume any content. Know what problem you're solving before you try to solve it."
        },
        {
          title: "Watch → Then Build (The Two-Pass Method)",
          desc: "For each topic, click 'Start Learning' to open the course. Watch at 1.25x speed while taking concise conceptual notes. Then close the video entirely and rebuild the concept from scratch in your IDE — no copy-paste allowed."
        },
        {
          title: "Complete Both Projects Per Phase",
          desc: "Every phase has a Foundation Project and a Master Capstone. The Foundation Project verifies you understood the basics. The Capstone verifies you can apply the concepts in realistic, ambiguous conditions. Skip neither."
        },
        {
          title: "Push to GitHub Immediately",
          desc: "Every project goes to a public GitHub repository with a professional README.md. Your GitHub profile is your résumé. Every phase completed is a visible credential. Document your logic, findings, and approach clearly."
        },
        {
          title: "Follow the 24-Month Timeline",
          desc: "Go to the Timeline page and bookmark it. Phases 1–3 in the first 6 months — this is the hardest stretch. Resist the urge to skip ahead. The phases are sequentially dependent. Jumping breaks the knowledge architecture."
        },
        {
          title: "Use the Strategy Page as Your North Star",
          desc: "When motivation dips — and it will — return to the Execution Directives page. Read the three laws. Remember: every insight must pass the 'So What?' test by affecting the bottom line. Reconnect to your reason."
        },
        {
          title: "Navigate with the Sidebar",
          desc: "Use the ☰ menu button (top left) to jump between phases without losing context. The sidebar gives you rapid access to any phase, the timeline, strategy, or this guide at any moment."
        }
      ].map((step, i) => `
        <div class="guide-step reveal" style="animation-delay:${i * 0.1}s">
          <div class="guide-step-num">${i + 1}</div>
          <div class="guide-step-content">
            <div class="guide-step-title">${step.title}</div>
            <div class="guide-step-desc">${step.desc}</div>
          </div>
        </div>
      `).join('')}

      <div class="pro-tips reveal">
        <div class="pro-tips-title">✦ Pro Tips from Top Analysts</div>
        ${[
          "Build your projects on real datasets — Kaggle, data.gov, and company APIs give you materials that resemble actual work conditions.",
          "Pair each phase with one real-world case study. Read how Netflix, Airbnb, or Google solved a similar problem.",
          "Time-box your sessions: 90-minute focused blocks with a 15-minute break outperform marathon sessions every time.",
          "Teach concepts to a rubber duck or a journal — explaining forces clarity. If you can't explain it simply, revisit it.",
          "Track your GitHub contributions daily. Streaks build identity. Identity builds habits. Habits build careers."
        ].map(tip => `<div class="pro-tip-item">${tip}</div>`).join('')}
      </div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>Efficient use of this curriculum will produce a Senior Data Analyst in 24 months.</p>
    </footer>
  `;
}

function renderAboutPage() {
  return `
    <div class="about-hero">
      <button class="back-btn" onclick="Router.navigate('home')" style="display:inline-flex;margin-bottom:32px;">← Back to Home</button>
      <div class="phase-hero-tag" style="margin-bottom:24px;">🌐 About This Platform</div>
      <h1 class="phase-hero-title" style="font-size:clamp(32px,5vw,58px);">
        Built for Those Who <span>Refuse to be Average</span>
      </h1>
      <p style="font-size:17px;color:var(--text-secondary);line-height:1.7;max-width:640px;margin:20px auto 0;">
        DataMaster Academy is not a course platform. It is an engineered execution system — 
        a zero-to-architect curriculum compressed into the most efficient, uncompromising 
        learning structure ever assembled for data professionals.
      </p>
    </div>

    <div class="about-features">
      ${[
        { icon: "🎯", title: "Precision-Engineered", desc: "Every topic, project, and course link is selected with surgical intent. No filler, no padding, no irrelevant content." },
        { icon: "🔄", title: "Sequentially Structured", desc: "10 phases build on each other deliberately. Skip-proofed by design — each phase assumes mastery of the prior." },
        { icon: "⚡", title: "Production-Level Projects", desc: "20+ projects mirror real enterprise scenarios. Not toy examples — systems that belong in a senior analyst's portfolio." },
        { icon: "🌐", title: "Free Resources Only", desc: "Every course link points to the world's best free educational content. Zero paywalls required to complete this curriculum." },
        { icon: "🤖", title: "AI-Forward", desc: "Phase 10 integrates LLM APIs into analytics workflows — preparing you for the AI-augmented analyst role that's emerging now." },
        { icon: "📈", title: "Career-Outcome Focused", desc: "Built to produce one outcome: Senior/Principal Data Analyst. Every decision is reverse-engineered from that role's actual requirements." },
        { icon: "🏗️", title: "GitHub-First", desc: "The 'Repository First' rule means you graduate with a public proof-of-work portfolio that speaks louder than any certificate." },
        { icon: "⏱️", title: "24-Month Blueprint", desc: "A realistic, deliberate timeline built for working adults. Aggressive but achievable when the Two-Pass Method is applied consistently." }
      ].map((f, i) => `
        <div class="about-feature reveal" style="animation-delay:${i * 0.08}s">
          <span class="about-feature-icon">${f.icon}</span>
          <div class="about-feature-title">${f.title}</div>
          <div class="about-feature-desc">${f.desc}</div>
        </div>
      `).join('')}
    </div>

    <div style="max-width:700px;margin:0 auto;padding:0 32px 80px;">
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:40px;text-align:center;backdrop-filter:blur(12px);" class="reveal">
        <div style="font-family:var(--font-display);font-size:22px;font-weight:700;background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:16px;">The Mission</div>
        <p style="font-size:16px;color:var(--text-secondary);line-height:1.75;">
          To take anyone from absolute zero in data — regardless of background, budget, or geography — 
          and deliver them to the doorstep of a Principal Data Analyst role through uncompromising 
          curriculum design, production-grade projects, and relentless execution discipline.
        </p>
        <p style="font-size:14px;color:var(--text-muted);margin-top:16px;font-family:var(--font-mono);">
          Data is the language of the 21st century. You are here to become fluent.
        </p>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DataMaster Academy</div>
      <p>The Ultimate Zero-to-Architect Data Analyst Curriculum</p>
      <p style="margin-top:8px;font-size:11px;">Execution begins now.</p>
    </footer>
  `;
}

// =========================================
// SIDEBAR
// =========================================
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
  document.getElementById('menu-toggle').classList.add('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
  document.getElementById('menu-toggle').classList.remove('open');
}

function toggleSidebar() {
  if (document.getElementById('sidebar').classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// =========================================
// THEME
// =========================================
function setTheme(mode) {
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('[data-theme-btn="light"]')?.classList.add('active');
  } else if (mode === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector('[data-theme-btn="dark"]')?.classList.add('active');
  } else {
    // system
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    document.querySelector('[data-theme-btn="system"]')?.classList.add('active');
  }
  localStorage.setItem('dma-theme', mode);
}

function loadTheme() {
  const saved = localStorage.getItem('dma-theme') || 'dark';
  setTheme(saved);
}

// =========================================
// REVEAL ANIMATION (Intersection Observer)
// =========================================
function initRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =========================================
// ATTACH EVENT LISTENERS (post-render)
// =========================================
function attachEventListeners() {
  // Re-attach dynamic onclick elements handled by inline js
  // Sidebar phase buttons
  document.querySelectorAll('[data-phase-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      Router.navigate('phase', { id: parseInt(btn.dataset.phaseNav) });
    });
  });
}

// =========================================
// BACKGROUND CANVAS (Particle Field)
// =========================================
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.4 + 0.1;
      const colors = ['79,158,255', '162,89,255', '0,229,255', '255,79,203'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, () => new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(79,158,255,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    animFrame = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  animate();
}

// =========================================
// INIT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  Router.navigate('home');
  initParticleCanvas();

  // Sidebar toggle
  document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // Theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeBtn));
  });

  // Sidebar navigation links
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.dataset.nav;
      if (nav === 'home')     Router.navigate('home');
      if (nav === 'timeline') Router.navigate('timeline');
      if (nav === 'strategy') Router.navigate('strategy');
      if (nav === 'guide')    Router.navigate('guide');
      if (nav === 'about')    Router.navigate('about');
    });
  });

  // Sidebar phase buttons
  document.querySelectorAll('[data-phase-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      Router.navigate('phase', { id: parseInt(btn.dataset.phaseNav) });
    });
  });
});
