# Reference Cheat Sheet for Data Preprocessing and Visualization using PANDAS, NUMPY,SEABORN And MATPLOTLIB

##### Personal referance sheet

## 🐼 **PANDAS CHEAT SHEET** – *Powerful data wrangling and analysis*

``` python
import pandas as pd  # Standard convention for importing pandas
```

### 📂 Load & Save – *Import/export datasets*

``` python
df = pd.read_csv('file.csv')        # Load a CSV file
df = pd.read_excel('file.xlsx')     # Load an Excel file
df = pd.read_json('file.json')      # Load a JSON file
df.to_csv('out.csv', index=False)   # Save DataFrame to CSV (without index)
```

### 🔍 Explore Data – *Initial inspection & summary*

``` python
df.head()             # Show first 5 rows
df.tail()             # Show last 5 rows
df.shape              # Get tuple of (rows, columns)
df.info()             # Summary: data types, non-null counts
df.describe()         # Statistical summary for numeric columns
df.columns.tolist()   # Get list of column names
df.dtypes             # Check data types of all columns
df.isnull().sum()     # Count missing (NaN) values per column
df.duplicated().sum() # Count duplicated rows
```

### 🛠️ Data Selection – *Access specific data*

``` python
df['col']               # Select single column (as Series)
df[['col1','col2']]     # Select multiple columns
df.iloc[0]              # Select first row by integer index
df.iloc[0,1]            # Select specific cell by integer position
df.loc[0,'col']         # Select specific cell by label
df[df['col']>0]         # Filter rows with condition
df.query('col>0')       # SQL-like query for filtering
```

### 🧹 Clean & Transform – *Tidy up messy data*

``` python
df.drop('col',axis=1,inplace=True)                        # Drop a column
df.dropna(inplace=True)                                   # Remove rows with missing values
df.fillna(0,inplace=True)                                 # Replace missing values with 0
df['col'].replace({'a':1,'b':2},inplace=True)             # Replace values in a column
df.rename(columns={'old':'new'},inplace=True)             # Rename columns
df['col'] = df['col'].astype('int')                       # Change data type
```

### 🧮 Aggregation & Grouping – *Summarize data efficiently*

``` python
df.groupby('col').mean()                                  # Group by a column and compute mean
df['col'].value_counts()                                  # Count unique values in a column
df.pivot_table(index='A',columns='B',values='C',aggfunc='sum')  # Create pivot table
```

### ➕ Add/Apply – *Create or transform columns*

``` python
df['new'] = df['col1'] + df['col2']                       # Add new column from existing ones
df['col'] = df['col'].apply(lambda x: x**2)               # Apply function to a column
```

### 📊 Sorting & Merging – *Combine and organize datasets*

``` python
df.sort_values('col',ascending=False)                     # Sort rows by column
pd.concat([df1,df2],axis=0)                               # Concatenate DataFrames vertically
pd.merge(df1,df2,on='id',how='inner')                     # Merge DataFrames on common key
```

------------------------------------------------------------------------

## 🔢 **NUMPY CHEAT SHEET** – *High-performance numerical computing*

``` python
import numpy as np  # Standard import for NumPy
```

### 📐 Create Arrays – *Make arrays of various shapes and values*

``` python
np.array([1,2,3])             # Create 1D array
np.zeros((2,3))               # 2x3 array filled with 0s
np.ones((2,3))                # 2x3 array filled with 1s
np.eye(3)                     # 3x3 Identity matrix
np.arange(0,10,2)             # Range from 0 to 8 with step 2
np.linspace(0,1,5)            # 5 evenly spaced numbers from 0 to 1
```

### 🔄 Reshape & Flatten – *Change shape of arrays*

``` python
a.reshape(2,3)                # Reshape array to 2 rows & 3 cols
a.flatten()                   # Flatten array to 1D (copy)
a.ravel()                     # Flatten array to 1D (view)
```

### ➕ Math Ops – *Element-wise & matrix operations*

``` python
a + b, a - b, a * b, a / b    # Element-wise arithmetic
np.sum(a), np.mean(a)         # Total sum & mean
np.max(a), np.min(a)          # Max & min values
np.std(a), np.var(a)          # Standard deviation & variance
np.sqrt(a)                    # Square root of each element
np.dot(a,b)                   # Matrix multiplication (dot product)
```

### 🎯 Indexing & Slicing – *Access parts of arrays*

``` python
a[0], a[-1]                   # First & last elements
a[1:4]                        # Slice elements 1 to 3
a[::2]                        # Every 2nd element
a[1,2]                        # Access element at 2D index
a[:,0]                        # All rows of first column
```

### 🎲 Random – *Generate random data*

``` python
np.random.rand(3,2)           # Uniform [0,1) – shape (3,2)
np.random.randn(3,2)          # Standard normal distribution
np.random.randint(0,10,(2,2)) # Integers from 0 to 9 – shape (2,2)
np.random.seed(42)            # Set seed for reproducibility
```

------------------------------------------------------------------------

## 📈 **MATPLOTLIB CHEAT SHEET** – *Low-level but flexible plotting*

``` python
import matplotlib.pyplot as plt  # Main interface for plotting
```

### 📊 Basic Plots – *Common chart types*

``` python
plt.plot(x,y)                   # Line plot
plt.scatter(x,y)                # Scatter plot
plt.bar(x,y)                    # Bar chart
plt.hist(data,bins=10)          # Histogram with 10 bins
plt.boxplot(data)               # Box-and-whisker plot
```

### 🛠️ Customize – *Add titles, labels, limits*

``` python
plt.title('Title')              # Plot title
plt.xlabel('X')                 # Label for X-axis
plt.ylabel('Y')                 # Label for Y-axis
plt.legend(['label'])           # Add legend
plt.grid(True)                  # Show grid
plt.xlim(0,10)                  # Set X-axis range
plt.ylim(0,100)                 # Set Y-axis range
```

### 📦 Show & Save – *Render or export*

``` python
plt.show()                      # Show the plot
plt.savefig('plot.png',dpi=300) # Save to file with high resolution
```

------------------------------------------------------------------------

## 📉 **SEABORN CHEAT SHEET** – *Statistical plotting made beautiful*

``` python
import seaborn as sns  # Import seaborn for advanced plots
```

### 🧭 Quick Plotting – *Intuitive plotting with DataFrames*

``` python
sns.set(style='darkgrid')                             # Set default style
sns.lineplot(x='x',y='y',data=df)                     # Line plot
sns.scatterplot(x='x',y='y',hue='label',data=df)      # Scatter with color group
sns.barplot(x='x',y='y',data=df)                      # Bar chart with error bars
sns.boxplot(x='x',y='y',data=df)                      # Box plot
sns.histplot(df['col'],bins=20)                       # Histogram with 20 bins
```

### 📊 Advanced – *Explore relationships & distributions*

``` python
sns.heatmap(df.corr(),annot=True,cmap='coolwarm')     # Correlation heatmap
sns.pairplot(df,hue='label')                          # Matrix of scatter plots
sns.violinplot(x='x',y='y',data=df)                   # Violin + box plot combo
sns.countplot(x='col',data=df)                        # Count frequencies per category
```

### 🎨 Styling – *Polish the look*

``` python
sns.set_context('notebook')                           # Scale elements for notebooks
sns.set_palette('Set2')                               # Set color palette
```